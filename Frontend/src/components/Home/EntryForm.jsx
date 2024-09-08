import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import axios from 'axios'; // Make sure to install axios with `npm install axios`

const EntryForm = () => {
  const navigate = useNavigate();
  const [isChatOpen, setChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    district: '',
    seam: '',
    prLoader: '',
    machine: '',
    machineName: '',
    workingHours: '',
    breakdownHours: '',
    idleHours: '',
    face: '',
    numberOfHolesBlasted: '',
    explosiveBlasted: '',
    tubMineCarFactor: '',
    totalProduction: '',
    numberOfRoofBolting: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/shift-log-entry', formData);
      setMessage('Form submitted successfully!');
      setMessageType('success');
      // Optionally, you can navigate after a short delay
      setTimeout(() => navigate('/entries'), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting form. Please try again.');
      setMessageType('error');
    }
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
      <h1 className="text-2xl text-center mb-6">SHIFT LOG ENTRY FORM</h1>

      {/* Form Structure */}
      <div className="bg-white p-8 mx-40 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            {/* Your form fields go here */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select District</label>
              <select name="district" onChange={handleChange} className="border border-gray-300 p-2 rounded">
                <option value="">Select District</option>
                <option value="1">DISTRICT 1</option>
                <option value="2">DISTRICT 2</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select Seam</label>
              <select name="seam" onChange={handleChange} className="border border-gray-300 p-2 rounded">
                <option value="">Select Seam</option>
                <option value="A">SEAM A</option>
                <option value="B">SEAM B</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Enter Number of P/R Loader</label>
              <input name="prLoader" type="number" placeholder="Enter Number of P/R Loader" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Select Machine</label>
              <select name="machine" onChange={handleChange} className="border border-gray-300 p-2 rounded">
                <option value="">Select Machine</option>
                <option value="SDL">SDL</option>
                <option value="LHD">LHD</option>
                {/* Add options here */}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Machine Name</label>
              <select name="machineName" onChange={handleChange} className="border border-gray-300 p-2 rounded">
                <option value="">Select Machine Name</option>
                <option value="KA-1">KA-1</option>
                <option value="KA-2">KA-2</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          {/* Hours and Short Firing Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg mb-4">Hours</h2>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Working (in Hours)</label>
                <input name="workingHours" type="number" placeholder="Working (in Hours)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Breakdown (in Hours)</label>
                <input name="breakdownHours" type="number" placeholder="Breakdown (in Hours)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Idle (in Hours)</label>
                <input name="idleHours" type="number" placeholder="Idle (in Hours)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
              </div>
            </div>
            <div>
              <h2 className="text-lg mb-4">Short Firing Details</h2>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Select Face</label>
                <select name="face" onChange={handleChange} className="border border-gray-300 p-2 rounded">
                  <option value="">Select Face</option>
                  <option value="1">FACE 1</option>
                  <option value="2">FACE 2</option>
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Number of Hole Blasted</label>
                <input name="numberOfHolesBlasted" type="number" placeholder="Number of Hole Blasted" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold">Explosive Blasted (in Kg)</label>
                <input name="explosiveBlasted" type="number" placeholder="Explosive Blasted (in Kg)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
              </div>
            </div>
          </div>

          {/* Tub/Mine Car Factor and Other Details */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Tub/Mine Car Factor (in Ton)</label>
              <input name="tubMineCarFactor" type="number" placeholder="Tub/Mine Car Factor (in Ton)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Total Production (in Ton)</label>
              <input name="totalProduction" type="number" placeholder="Total Production (in Ton)" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Number of Roof Bolting</label>
              <input name="numberOfRoofBolting" type="number" placeholder="Number of Roof Bolting" onChange={handleChange} className="border border-gray-300 p-2 rounded" />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              type="submit" 
              className="bg-transparent text-black hover:bg-black hover:text-white border border-black py-2 px-4 rounded">
              Submit
            </button>
            <button 
              type="button" 
              className="bg-transparent text-black hover:bg-black hover:text-white border border-black py-2 px-4 rounded">
              Add More Entries
            </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 p-4 rounded ${messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message}
          </div>
        )}
      </div>

      {/* Chatbot */}
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default EntryForm;
