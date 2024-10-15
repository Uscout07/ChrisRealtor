"use client";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa"; // Close icon
import { TbMail } from "react-icons/tb"; // Tabler Mail icon

const EmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Use effect to add a delay before showing the popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 7-second delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Email submitted:", email);
    setSubmitted(true); // Simulate form submission
    setEmail(""); // Clear the input field
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <FaTimes size={20} />
          </button>

          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <TbMail size={50} className="text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Get a Free Consultation!
            </h2>
            <p className="text-gray-600 mt-2 mb-6">
              Leave your email, and we'll contact you to schedule a free consultation.
            </p>

            {!submitted ? (
              <form className="w-full" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-4 p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  Get Free Consultation
                </button>
              </form>
            ) : (
              <p className="text-green-500 mt-4">Thank you! We'll be in touch soon.</p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default EmailPopup;
