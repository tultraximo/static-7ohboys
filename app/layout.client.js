"use client";
import { useState, useEffect } from "react";

export default function AgeVerification({ children }) {
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  useEffect(() => {
    // Check if user has already verified age in localStorage
    const hasVerifiedAge = localStorage.getItem("ageVerified");
    if (!hasVerifiedAge) {
      setShowAgeVerification(true);
    }
  }, []);

  const handleAgeVerification = (isOver18) => {
    if (isOver18) {
      localStorage.setItem("ageVerified", "true");
      setShowAgeVerification(false);
    } else {
      // Redirect or show message for underage users
      window.location.href = "https://www.google.com"; // Redirect to Google or another safe site
      // Alternatively, uncomment below for a message instead of redirect:
      // alert("Sorry, you must be 18 or older to enter this site.");
    }
  };

  return (
    <>
      {showAgeVerification ? (
        <div className="fixed inset-0 backdrop-blur-md bg-gray-400/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Are you 18 or older?</h2>
            <p className="mb-4 text-gray-600">This site contains content intended for adults 18+. Please verify your age.</p>
            <div className="space-x-4">
              <button
                onClick={() => handleAgeVerification(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Yes, I’m 18, Enter
              </button>
              <button
                onClick={() => handleAgeVerification(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                No, I’m not 18
              </button>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
