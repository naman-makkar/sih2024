// import React, { useState } from "react";
// import {
//   User,
//   Lock,
//   Calendar,
//   QrCode,
//   HelpCircle,
//   ArrowRight,
//   Shield,
//   RefreshCcw,
//   Users,
// } from "lucide-react";

// const InputField = ({
//   icon: Icon,
//   placeholder,
//   type = "text",
//   value,
//   onChange,
// }) => (
//   <div className="relative">
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full pl-12 pr-4 py-3 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-full text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
//     />
//     <Icon
//       className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white opacity-70"
//       size={20}
//     />
//   </div>
// );

// const InputCard = ({
//   icon: Icon,
//   placeholder,
//   type = "text",
//   value,
//   onChange,
// }) => (
//   <div className="overflow-hidden border border-indigo-300 rounded-lg">
//     <div className="flex">
//       <div className="bg-indigo-100 p-3 flex items-center justify-center">
//         <Icon className="text-indigo-400" size={20} />
//       </div>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200"
//       />
//     </div>
//   </div>
// );

// const FeatureItem = ({ icon: Icon, text }) => (
//   <div className="flex items-center space-x-3">
//     <div className="bg-white bg-opacity-20 p-2 rounded-full">
//       <Icon size={24} className="text-white" />
//     </div>
//     <span>{text}</span>
//   </div>
// );

// const Admin = () => {
//   const [showQR, setShowQR] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [academicYear, setAcademicYear] = useState("");
//   const [officialId, setOfficialId] = useState("");
//   const [password, setPassword] = useState("");
//   const [consent, setConsent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isRegistering) {
//       console.log("Registering with:", {
//         academicYear,
//         officialId,
//         password,
//         consent,
//       });
//       // alert(
//       //   "Registration submitted! (This is a mock alert, replace with actual API call)"
//       // );
//     } else {
//       console.log("Logging in with:", { officialId, password });
//       // alert(
//       //   "Login submitted! (This is a mock alert, replace with actual API call)"
//       // );
//       setIsLoggedIn(true); // Switch to login screen
//     }
//   };

//   const toggleMode = () => {
//     setIsRegistering(!isRegistering);
//     // Clear fields when switching modes
//     setAcademicYear("");
//     setOfficialId("");
//     setPassword("");
//     setConsent(false);
//   };

//   if (isLoggedIn) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-400 to-purple-300">
//         <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 space-y-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold text-indigo-800">
//               🏛️ Official Portal
//             </h2>
//             <HelpCircle className="text-indigo-300 cursor-pointer hover:text-indigo-400" />
//           </div>

//           <div className="bg-indigo-50 border-indigo-200 border rounded-lg p-4">
//             <p className="text-indigo-800">
//               Secure login for District, State, and Ministry Officials.
//             </p>
//           </div>

//           <form className="space-y-4">
//             <InputCard
//               icon={Calendar}
//               placeholder="Select Academic Year"
//               value={academicYear}
//               onChange={(e) => setAcademicYear(e.target.value)}
//             />
//             <InputCard
//               icon={User}
//               placeholder="Official ID"
//               value={officialId}
//               onChange={(e) => setOfficialId(e.target.value)}
//             />
//             <InputCard
//               icon={Lock}
//               placeholder="Secure Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className="flex items-center space-x-2 text-sm">
//               <input
//                 type="checkbox"
//                 id="consent"
//                 checked={consent}
//                 onChange={(e) => setConsent(e.target.checked)}
//                 className="rounded text-indigo-400 focus:ring-indigo-300"
//               />
//               <label htmlFor="consent" className="text-gray-700">
//                 I consent to authenticate my Aadhaar details
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full p-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 flex items-center justify-center space-x-2"
//             >
//               <span>Secure Login</span>
//               <ArrowRight size={18} />
//             </button>
//           </form>

//           <div className="flex items-center justify-between text-sm text-indigo-500">
//             <a href="#" className="hover:underline">
//               Forgot Password?
//             </a>
//             <button
//               onClick={() => setShowQR(!showQR)}
//               className="flex items-center space-x-1 hover:text-indigo-800"
//             >
//               <QrCode size={18} />
//               <span>{showQR ? "Hide QR Login" : "Show QR Login"}</span>
//             </button>
//           </div>

//           {showQR && (
//             <div className="bg-white border border-indigo-400 rounded-lg">
//               <div className="p-4 flex flex-col items-center space-y-2">
//                 <div className="w-48 h-48 bg-indigo-100 p-2 rounded-md">
//                   <img
//                     src="/api/placeholder/200/200"
//                     alt="QR Code for Login"
//                     className="w-full h-full"
//                   />
//                 </div>
//                 <p className="text-sm text-gray-600 text-center">
//                   Scan this QR code with the Official Mobile App to log in
//                   securely.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800">
//       <div className="w-1/2 bg-white flex items-center justify-center p-12">
//         <div className="max-w-md w-full space-y-8">
//           <div>
//             <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
//               {isRegistering ? "Create Account" : "Welcome Back"}
//             </h2>
//             <p className="text-gray-600">
//               {isRegistering
//                 ? "Register for the official portal"
//                 : "Enter your credentials to access the official portal"}
//             </p>
//           </div>
//           <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//             {isRegistering && (
//               <InputField
//                 icon={Calendar}
//                 placeholder="Select Academic Year"
//                 value={academicYear}
//                 onChange={(e) => setAcademicYear(e.target.value)}
//               />
//             )}
//             <InputField
//               icon={User}
//               placeholder="Official ID"
//               value={officialId}
//               onChange={(e) => setOfficialId(e.target.value)}
//             />
//             <InputField
//               icon={Lock}
//               placeholder="Secure Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div className="flex items-center">
//               <input
//                 id="consent"
//                 name="consent"
//                 type="checkbox"
//                 checked={consent}
//                 onChange={(e) => setConsent(e.target.checked)}
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="consent"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 I consent to authenticate my Aadhaar details
//               </label>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
//               >
//                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                   <Lock className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
//                 </span>
//                 {isRegistering ? "Register" : "Login"}
//               </button>
//             </div>
//           </form>
//           <div className="text-sm text-gray-500">
//             <button
//               onClick={toggleMode}
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               {isRegistering
//                 ? "Already have an account? Login"
//                 : "New here? Register"}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/2 bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white p-12">
//         <div className="max-w-md space-y-6">
//           <h2 className="text-3xl font-bold">Welcome to the Official Portal</h2>
//           <p className="text-lg">
//             Use your official credentials to access the portal and manage
//             district, state, and ministry affairs securely.
//           </p>
//           <div className="space-y-4">
//             <FeatureItem icon={Shield} text="Secure & Trusted" />
//             <FeatureItem icon={Users} text="Multi-Level Access" />
//             <FeatureItem icon={RefreshCcw} text="Regular Updates" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from "react";
import {
  User,
  Lock,
  Calendar,
  QrCode,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

// Simplified InputCard without external dependencies
const InputCard = ({ icon: Icon, placeholder, type = "text" }) => (
  <div className="overflow-hidden border border-blue-300 rounded-lg">
    <div className="flex">
      <div className="bg-blue-100 p-3 flex items-center justify-center">
        <Icon className="text-blue-600" size={20} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 p-3 focus:outline-none focus:ring-0 border-none"
      />
    </div>
  </div>
);

const Admin = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-400">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-800">
            🏛️ Official Portal
          </h2>
          <HelpCircle className="text-blue-600 cursor-pointer hover:text-blue-800" />
        </div>

        {/* Simplified Alert */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            Secure login for District, State, and Ministry Officials.
          </p>
        </div>

        <form className="space-y-4">
          <InputCard icon={Calendar} placeholder="Select Academic Year" />
          <InputCard icon={User} placeholder="Official ID" />
          <InputCard
            icon={Lock}
            placeholder="Secure Password"
            type="password"
          />

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="consent"
              className="rounded text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-gray-700">
              I consent to authenticate my Aadhaar details
            </label>
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 flex items-center justify-center space-x-2"
          >
            <span>Secure Login</span>
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
