// import React, { useState } from "react";

// const AdminPanel = () => {
//   const [selectedApplication, setSelectedApplication] = useState(null);

//   // Hardcoded data for demonstration
//   const scholarshipData = {
//     totalApplicants: 1250,
//     totalAmount: 12500000, // 1.25 Crore INR
//     disbursedAmount: 7500000, // 75 Lakh INR
//     schemeBreakdown: [
//       {
//         id: "PMSSS001",
//         name: "Engineering Scholarship",
//         applicants: 500,
//         maxAmount: 125000,
//       },
//       {
//         id: "PMSSS002",
//         name: "Medical Scholarship",
//         applicants: 300,
//         maxAmount: 150000,
//       },
//       {
//         id: "PMSSS003",
//         name: "Arts and Humanities Scholarship",
//         applicants: 450,
//         maxAmount: 100000,
//       },
//     ],
//     recentApplications: [
//       {
//         id: "APP001",
//         studentName: "Rahul Sharma",
//         schemeId: "PMSSS001",
//         schemeName: "Engineering Scholarship",
//         amount: 120000,
//         date: "2024-08-15",
//         status: "Approved",
//       },
//       {
//         id: "APP002",
//         studentName: "Priya Patel",
//         schemeId: "PMSSS002",
//         schemeName: "Medical Scholarship",
//         amount: 150000,
//         date: "2024-08-14",
//         status: "Pending Review",
//       },
//       {
//         id: "APP003",
//         studentName: "Amit Kumar",
//         schemeId: "PMSSS003",
//         schemeName: "Arts and Humanities Scholarship",
//         amount: 95000,
//         date: "2024-08-13",
//         status: "Approved",
//       },
//       {
//         id: "APP004",
//         studentName: "Neha Singh",
//         schemeId: "PMSSS001",
//         schemeName: "Engineering Scholarship",
//         amount: 125000,
//         date: "2024-08-12",
//         status: "Pending Review",
//       },
//     ],
//     reimbursements: [
//       {
//         id: "REIMB001",
//         studentName: "Rahul Sharma",
//         amount: 120000,
//         date: "2024-08-20",
//         status: "Processed",
//       },
//       {
//         id: "REIMB002",
//         studentName: "Amit Kumar",
//         amount: 95000,
//         date: "2024-08-19",
//         status: "Pending",
//       },
//     ],
//   };

//   // Calculate approved and pending review counts
//   const approvedApplications = scholarshipData.recentApplications.filter(
//     (app) => app.status === "Approved"
//   ).length;
//   const pendingReviewApplications = scholarshipData.recentApplications.filter(
//     (app) => app.status === "Pending Review"
//   ).length;

//   const openModal = (application) => {
//     setSelectedApplication(application);
//   };

//   const closeModal = () => {
//     setSelectedApplication(null);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
//         PMSSS Admin Panel
//       </h1>

//       {/* Overview Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="bg-blue-100 p-4 rounded-lg">
//             <h3 className="text-lg font-medium text-blue-800">
//               Total Applicants
//             </h3>
//             <p className="text-3xl font-bold text-blue-600">
//               {scholarshipData.totalApplicants}
//             </p>
//           </div>
//           <div className="bg-green-100 p-4 rounded-lg">
//             <h3 className="text-lg font-medium text-green-800">
//               Approved Applications
//             </h3>
//             <p className="text-3xl font-bold text-green-600">
//               {approvedApplications}
//             </p>
//           </div>
//           <div className="bg-yellow-100 p-4 rounded-lg">
//             <h3 className="text-lg font-medium text-yellow-800">
//               Pending Review
//             </h3>
//             <p className="text-3xl font-bold text-yellow-600">
//               {pendingReviewApplications}
//             </p>
//           </div>
//           <div className="bg-green-100 p-4 rounded-lg">
//             <h3 className="text-lg font-medium text-green-800">Total Amount</h3>
//             <p className="text-3xl font-bold text-green-600">
//               ₹{(scholarshipData.totalAmount / 10000000).toFixed(2)} Cr
//             </p>
//           </div>
//           <div className="bg-yellow-100 p-4 rounded-lg">
//             <h3 className="text-lg font-medium text-yellow-800">
//               Disbursed Amount
//             </h3>
//             <p className="text-3xl font-bold text-yellow-600">
//               ₹{(scholarshipData.disbursedAmount / 100000).toFixed(2)} Lakh
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Scholarship Schemes Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Scholarship Schemes</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">Scheme ID</th>
//                 <th className="py-3 px-4 text-left">Scheme Name</th>
//                 <th className="py-3 px-4 text-left">Applicants</th>
//                 <th className="py-3 px-4 text-left">Max Amount</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {scholarshipData.schemeBreakdown.map((scheme) => (
//                 <tr key={scheme.id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-4">{scheme.id}</td>
//                   <td className="py-3 px-4">{scheme.name}</td>
//                   <td className="py-3 px-4">{scheme.applicants}</td>
//                   <td className="py-3 px-4">
//                     ₹{scheme.maxAmount.toLocaleString()}
//                   </td>
//                   <td className="py-3 px-4">
//                     <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Approved Applications Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Approved Applications</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">Application ID</th>
//                 <th className="py-3 px-4 text-left">Student Name</th>
//                 <th className="py-3 px-4 text-left">Scheme ID</th>
//                 <th className="py-3 px-4 text-left">Scholarship Amount</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {scholarshipData.recentApplications
//                 .filter((app) => app.status === "Approved")
//                 .map((app) => (
//                   <tr key={app.id} className="border-b hover:bg-gray-50">
//                     <td className="py-3 px-4">{app.id}</td>
//                     <td className="py-3 px-4">{app.studentName}</td>
//                     <td className="py-3 px-4">{app.schemeId}</td>
//                     <td className="py-3 px-4">
//                       ₹{app.amount.toLocaleString()}
//                     </td>
//                     <td className="py-3 px-4">{app.date}</td>
//                     <td className="py-3 px-4">
//                       <button
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300 mr-2"
//                         onClick={() => openModal(app)}
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pending Review Applications Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">
//           Applications Pending Review
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">Application ID</th>
//                 <th className="py-3 px-4 text-left">Student Name</th>
//                 <th className="py-3 px-4 text-left">Scheme ID</th>
//                 <th className="py-3 px-4 text-left">Scholarship Amount</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {scholarshipData.recentApplications
//                 .filter((app) => app.status === "Pending Review")
//                 .map((app) => (
//                   <tr key={app.id} className="border-b hover:bg-gray-50">
//                     <td className="py-3 px-4">{app.id}</td>
//                     <td className="py-3 px-4">{app.studentName}</td>
//                     <td className="py-3 px-4">{app.schemeId}</td>
//                     <td className="py-3 px-4">
//                       ₹{app.amount.toLocaleString()}
//                     </td>
//                     <td className="py-3 px-4">{app.date}</td>
//                     <td className="py-3 px-4">
//                       <button
//                         className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300 mr-2"
//                         onClick={() => openModal(app)}
//                       >
//                         Review
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Payment Reimbursement Section */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Payment Reimbursement</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="py-3 px-4 text-left">Reimbursement ID</th>
//                 <th className="py-3 px-4 text-left">Student Name</th>
//                 <th className="py-3 px-4 text-left">Amount</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-left">Status</th>
//                 <th className="py-3 px-4 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600">
//               {scholarshipData.reimbursements.map((reimbursement) => (
//                 <tr
//                   key={reimbursement.id}
//                   className="border-b hover:bg-gray-50"
//                 >
//                   <td className="py-3 px-4">{reimbursement.id}</td>
//                   <td className="py-3 px-4">{reimbursement.studentName}</td>
//                   <td className="py-3 px-4">
//                     ₹{reimbursement.amount.toLocaleString()}
//                   </td>
//                   <td className="py-3 px-4">{reimbursement.date}</td>
//                   <td className="py-3 px-4">{reimbursement.status}</td>
//                   <td className="py-3 px-4">
//                     <button
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 mr-2"
//                       onClick={() => openModal(reimbursement)}
//                     >
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedApplication && (
//         <div
//           className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
//           id="my-modal"
//         >
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 Application Details
//               </h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500">
//                   <strong>Application ID:</strong> {selectedApplication.id}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Student Name:</strong>{" "}
//                   {selectedApplication.studentName}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Scheme:</strong> {selectedApplication.schemeName}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Scholarship Amount:</strong> ₹
//                   {selectedApplication.amount.toLocaleString()}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Date:</strong> {selectedApplication.date}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   <strong>Status:</strong> {selectedApplication.status}
//                 </p>
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   id="ok-btn"
//                   className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState } from "react";

const AdminPanel = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Hardcoded data for demonstration
  const scholarshipData = {
    totalApplicants: 1250,
    totalAmount: 12500000, // 1.25 Crore INR
    disbursedAmount: 7500000, // 75 Lakh INR
    schemeBreakdown: [
      {
        id: "PMSSS001",
        name: "Engineering Scholarship",
        applicants: 500,
        maxAmount: 125000,
      },
      {
        id: "PMSSS002",
        name: "Medical Scholarship",
        applicants: 300,
        maxAmount: 150000,
      },
      {
        id: "PMSSS003",
        name: "Arts and Humanities Scholarship",
        applicants: 450,
        maxAmount: 100000,
      },
    ],
    recentApplications: [
      {
        id: "APP001",
        studentName: "Rahul Sharma",
        schemeId: "PMSSS001",
        schemeName: "Engineering Scholarship",
        amount: 120000,
        date: "2024-08-15",
        status: "Approved",
      },
      {
        id: "APP002",
        studentName: "Priya Patel",
        schemeId: "PMSSS002",
        schemeName: "Medical Scholarship",
        amount: 150000,
        date: "2024-08-14",
        status: "Pending Review",
      },
      {
        id: "APP003",
        studentName: "Amit Kumar",
        schemeId: "PMSSS003",
        schemeName: "Arts and Humanities Scholarship",
        amount: 95000,
        date: "2024-08-13",
        status: "Approved",
      },
      {
        id: "APP004",
        studentName: "Neha Singh",
        schemeId: "PMSSS001",
        schemeName: "Engineering Scholarship",
        amount: 125000,
        date: "2024-08-12",
        status: "Pending Review",
      },
    ],
    reimbursements: [
      {
        id: "REIMB001",
        studentName: "Rahul Sharma",
        amount: 120000,
        date: "2024-08-20",
        status: "Processed",
      },
      {
        id: "REIMB002",
        studentName: "Amit Kumar",
        amount: 95000,
        date: "2024-08-19",
        status: "Pending",
      },
    ],
  };

  // Calculate approved and pending review counts
  const approvedApplications = 750;
  const pendingReviewApplications = 500;

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
        PMSSS Admin Panel
      </h1>

      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800">
              Total Applicants
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {scholarshipData.totalApplicants}
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">
              Approved Applications
            </h3>
            <p className="text-3xl font-bold text-green-600">
              {approvedApplications}
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-800">
              Pending Review
            </h3>
            <p className="text-3xl font-bold text-yellow-600">
              {pendingReviewApplications}
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-800">Total Amount</h3>
            <p className="text-3xl font-bold text-green-600">
              ₹{(scholarshipData.totalAmount / 10000000).toFixed(2)} Cr
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-800">
              Disbursed Amount
            </h3>
            <p className="text-3xl font-bold text-yellow-600">
              ₹{(scholarshipData.disbursedAmount / 100000).toFixed(2)} Lakh
            </p>
          </div>
        </div>
      </div>

      {/* Scholarship Schemes Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scholarship Schemes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Scheme ID</th>
                <th className="py-3 px-4 text-left">Scheme Name</th>
                <th className="py-3 px-4 text-left">Applicants</th>
                <th className="py-3 px-4 text-left">Max Amount</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {scholarshipData.schemeBreakdown.map((scheme) => (
                <tr key={scheme.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{scheme.id}</td>
                  <td className="py-3 px-4">{scheme.name}</td>
                  <td className="py-3 px-4">{scheme.applicants}</td>
                  <td className="py-3 px-4">
                    ₹{scheme.maxAmount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                      // onClick={() => openModal(scheme)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Approved Applications Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Approved Applications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Application ID</th>
                <th className="py-3 px-4 text-left">Student Name</th>
                <th className="py-3 px-4 text-left">Scheme ID</th>
                <th className="py-3 px-4 text-left">Scholarship Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {scholarshipData.recentApplications
                .filter((app) => app.status === "Approved")
                .map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{app.id}</td>
                    <td className="py-3 px-4">{app.studentName}</td>
                    <td className="py-3 px-4">{app.schemeId}</td>
                    <td className="py-3 px-4">
                      ₹{app.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{app.date}</td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300 mr-2"
                        onClick={() => openModal(app)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Review Applications Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Applications Pending Review
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Application ID</th>
                <th className="py-3 px-4 text-left">Student Name</th>
                <th className="py-3 px-4 text-left">Scheme ID</th>
                <th className="py-3 px-4 text-left">Scholarship Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {scholarshipData.recentApplications
                .filter((app) => app.status === "Pending Review")
                .map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{app.id}</td>
                    <td className="py-3 px-4">{app.studentName}</td>
                    <td className="py-3 px-4">{app.schemeId}</td>
                    <td className="py-3 px-4">
                      ₹{app.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">{app.date}</td>
                    <td className="py-3 px-4">
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300 mr-2"
                        onClick={() => openModal(app)}
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Reimbursement Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Reimbursement</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Reimbursement ID</th>
                <th className="py-3 px-4 text-left">Student Name</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {scholarshipData.reimbursements.map((reimbursement) => (
                <tr
                  key={reimbursement.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{reimbursement.id}</td>
                  <td className="py-3 px-4">{reimbursement.studentName}</td>
                  <td className="py-3 px-4">
                    ₹{reimbursement.amount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">{reimbursement.date}</td>
                  <td className="py-3 px-4">{reimbursement.status}</td>
                  <td className="py-3 px-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300 mr-2"
                      onClick={() => openModal(reimbursement)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {selectedItem.id ? "Details" : "Scheme Details"}
              </h3>
              <div className="mt-2 px-7 py-3">
                {selectedItem.id ? (
                  // Application or Reimbursement Details
                  <>
                    <p className="text-sm text-gray-500">
                      <strong>ID:</strong> {selectedItem.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Student Name:</strong> {selectedItem.studentName}
                    </p>
                    {selectedItem.schemeId && (
                      <>
                        <p className="text-sm text-gray-500">
                          <strong>Scheme ID:</strong> {selectedItem.schemeId}
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Scheme Name:</strong>{" "}
                          {selectedItem.schemeName}
                        </p>
                      </>
                    )}
                    <p className="text-sm text-gray-500">
                      <strong>Amount:</strong> ₹
                      {selectedItem.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Date:</strong> {selectedItem.date}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Status:</strong> {selectedItem.status}
                    </p>
                  </>
                ) : (
                  // Scheme Details
                  <>
                    <p className="text-sm text-gray-500">
                      <strong>Scheme ID:</strong> {selectedItem.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Scheme Name:</strong> {selectedItem.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Applicants:</strong> {selectedItem.applicants}
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Max Amount:</strong> ₹
                      {selectedItem.maxAmount.toLocaleString()}
                    </p>
                  </>
                )}
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
