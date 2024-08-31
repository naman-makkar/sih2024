import React from "react";

function Announcement() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-m">
        <img
          src="/img13.jpg"
          alt="not found"
          className="mb-2 w-32 h-32 object-cover rounded-full"
        />

        <h2 className="text-lg font-bold">Announcements</h2>
        <p>The portal is open for Academic year 2024-25 now.</p>
        <p>
          The students can now start registering in the portal to get their One
          Time Registration (OTR) numbers.
        </p>
        {/* <p className="mt-4">
          <a className="text-lg underline font-bold" href="#">
            View all
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default Announcement;
