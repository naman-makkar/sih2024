// export default DocumentUpload;
import React, { useState } from "react";

const DocumentUpload = () => {
  const [documents, setDocuments] = useState({
    aadhaar: null,
    tenthMarksheet: null,
    twelfthMarksheet: null,
  });

  const handleFileChange = (documentType, file) => {
    setDocuments((prev) => ({
      ...prev,
      [documentType]: { name: file.name, status: "pending" },
    }));

    // Simulate upload
    setTimeout(() => {
      setDocuments((prev) => ({
        ...prev,
        [documentType]: { ...prev[documentType], status: "done" },
      }));
      console.log(`${file.name} uploaded successfully.`);
    }, 1000);
  };

  const renderUploadSection = (title, documentType) => (
    <div className="mb-6 p-5 border border-gray-300 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-3 text-blue-800">{title}</h3>
      <div className="flex items-center justify-between">
        <input
          type="file"
          id={`file-${documentType}`}
          className="hidden"
          onChange={(e) => handleFileChange(documentType, e.target.files[0])}
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <label
          htmlFor={`file-${documentType}`}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300"
        >
          Select File
        </label>
        {documents[documentType] && (
          <div className="flex items-center">
            <span
              className={`mr-3 ${
                documents[documentType].status === "done"
                  ? "text-orange-600"
                  : "text-gray-600"
              }`}
            >
              {documents[documentType].name}
            </span>
            {documents[documentType].status === "pending" && (
              <span className="text-gray-500">Uploading...</span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">
          Document Upload
        </h2>
        {renderUploadSection("Aadhaar Card", "aadhaar")}
        {renderUploadSection("10th Marksheet", "tenthMarksheet")}
        {renderUploadSection("12th Marksheet", "twelfthMarksheet")}
      </div>
    </div>
  );
};

export default DocumentUpload;
