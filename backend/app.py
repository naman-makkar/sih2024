import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import json
import random
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

# Download necessary NLTK data
nltk.download('punkt', quiet=True)
nltk.download('stopwords', quiet=True)
nltk.download('wordnet', quiet=True)
nltk.download('punkt_tab')
app = Flask(__name__, static_folder='static', static_url_path='/static')

# Load custom data
with open('backend\\data.json', 'r') as f:
    custom_data = json.load(f)

# Initialize lemmatizer and stop words
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

# Configure Gemini API
genai.configure(api_key='AIzaSyAOclOwOEhrgfQP_UGfYLJraYQKAphcajY')

# Preprocess text
def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [lemmatizer.lemmatize(token) for token in tokens if token.isalnum() and token not in stop_words]
    return ' '.join(tokens)

# Prepare custom data for TF-IDF
patterns = []
intents = []
for intent in custom_data['intents']:
    for pattern in intent['patterns']:
        patterns.append(preprocess_text(pattern))
        intents.append(intent)

# Create TF-IDF vectorizer
vectorizer = TfidfVectorizer()
pattern_vectors = vectorizer.fit_transform(patterns)

# Function to find the most similar intent
def find_similar_intent(query):
    preprocessed_query = preprocess_text(query)
    query_vector = vectorizer.transform([preprocessed_query])
    similarities = cosine_similarity(query_vector, pattern_vectors)[0]
    max_similarity = max(similarities)
    if max_similarity > 0.6:  # Increased threshold for better matching
        return intents[np.argmax(similarities)]
    return None

# Context management
context = {}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    user_message = request.args.get('msg')
    session_id = request.args.get('session_id', 'default')
    
    if session_id not in context:
        context[session_id] = []
    
    context[session_id].append(f"Human: {user_message}")
    
    intent = find_similar_intent(user_message)
    if intent:
        response = random.choice(intent['responses'])
        # Enhance response with Gemini
        enhanced_response = enhance_response_with_gemini(response, user_message, context[session_id])
    else:
        # Use Gemini API for general responses
        enhanced_response = get_gemini_response(user_message, context[session_id])
    
    formatted_response = format_response(enhanced_response)
    
    context[session_id].append(f"Bot: {formatted_response}")
    
    return jsonify({
        'response': formatted_response,
        'session_id': session_id
    })

def enhance_response_with_gemini(base_response, user_message, conversation_history):
    conversation_context = "\n".join(conversation_history[-5:])
    prompt = f"""Given the following context and base response, enhance the response to make it more informative and engaging:

Context:
{conversation_context}

User message: {user_message}
Base response: {base_response}

Enhance the response by:
1. Adding more details about the scholarship program
2. Providing a helpful tip or insight
3. Suggesting a relevant follow-up question

Keep the enhanced response concise and friendly."""

    gemini_model = genai.GenerativeModel('gemini-pro')
    gemini_response = gemini_model.generate_content(prompt)
    return gemini_response.text

def get_gemini_response(user_message, conversation_history):
    conversation_context = "\n".join(conversation_history[-5:])
    prompt = f"""Based on the following conversation history and the latest user message, provide a friendly and informative response about the scholarship program. If the query is not related to the scholarship program, provide a general helpful response.

Conversation history:
{conversation_context}

User message: {user_message}

Response format:
1. A brief, context-aware greeting (if appropriate)
2. Main response (2-3 sentences)
3. A helpful tip or insight related to the topic
4. A relevant follow-up question
5. A friendly closing remark

Ensure the response is well-structured, engaging, and easy to read."""

    gemini_model = genai.GenerativeModel('gemini-pro')
    gemini_response = gemini_model.generate_content(prompt)
    return gemini_response.text

def format_response(response):
    sections = response.split('\n\n')
    formatted_response = "📚 "
    
    for i, section in enumerate(sections):
        if i == 0:  # Greeting
            formatted_response += f"{section}\n\n"
        elif i == 1:  # Main response
            formatted_response += f"{section}\n\n"
        elif i == 2:  # Tip or insight
            formatted_response += f"💡 Tip: {section}\n\n"
        elif i == 3:  # Follow-up question
            formatted_response += f"❓ {section}\n\n"
        elif i == 4:  # Closing remark
            formatted_response += f"{section}\n\n"
    
    return formatted_response.strip()

if __name__ == "__main__":
    app.run(debug=True)