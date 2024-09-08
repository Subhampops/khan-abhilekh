import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ChatIcon } from "@chakra-ui/icons";
import Chatbot from "./Chatbot"; // Adjust the import path as needed

const RaiseAlert = () => {
  const navigate = useNavigate();
  const [isChatOpen, setChatOpen] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate('/notification'); // Navigate to the Entries page
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center bg-transparent text-black hover:bg-black hover:text-white border border-black py-2 px-4 rounded">
        <ArrowBackIcon className="mr-2" />
        Back
      </button>

      {/* Heading */}
      <h1 className="text-2xl text-center mb-6">CREATE ALERT</h1>

      {/* Form Structure Box 1 */}
      <div className="bg-white p-8 mx-auto max-w-4xl rounded-lg shadow-lg mb-6">
        <form>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select District</label>
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select District</option>
                <option value="1">DISTRICT 1</option>
                <option value="2">DISTRICT 2</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select Seam</label>
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select Seam</option>
                <option value="A">SEAM A</option>
                <option value="B">SEAM B</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select Machine at Fault</label>
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select Machine at Fault</option>
                <option value="SDL">SDL</option>
                <option value="LHD">LHD</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Machine Name</label>
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select Machine Name</option>
                <option value="KA-1">KA-1</option>
                <option value="KA-2">KA-2</option>
                {/* Add options here */}
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Form Structure Box 2 */}
      <div className="bg-white p-8 mx-auto max-w-4xl rounded-lg shadow-lg mb-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Incident Description</label>
              <textarea className="border border-gray-300 p-2 rounded" rows="3"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Impact</label>
              <textarea className="border border-gray-300 p-2 rounded" rows="3"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Estimated Downtime (in Hours)</label>
              <input type="number" className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Action Taken</label>
              <textarea className="border border-gray-300 p-2 rounded" rows="3"></textarea>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Alert Level</label>
              <select className="border border-gray-300 p-2 rounded">
                <option value="">Select Alert Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-black text-white py-2 px-28 rounded hover:scale-110 transition-transform duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default RaiseAlert;
