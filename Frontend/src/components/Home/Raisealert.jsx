// RaiseAlert.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useAlertContext } from './AlertContext';

const RaiseAlert = () => {
    const navigate = useNavigate();
    const { addAlert } = useAlertContext();
    const [formData, setFormData] = useState({
        district: '',
        seam: '',
        machineFault: '',
        machineName: '',
        description: '',
        impact: '',
        downtime: '',
        action: '',
        level: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAlert = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            level: formData.level.toUpperCase(),
            color: formData.level === 'low' ? 'green' : formData.level === 'medium' ? 'orange' : 'red',
            name: 'MANISH SHARMA', // You can replace this with dynamic data if needed
            ...formData
        };
        addAlert(newAlert);
        navigate('/notification'); // Navigate to the notification page
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

            {/* Form Structure */}
            <div className="bg-white p-8 mx-auto max-w-4xl rounded-lg shadow-lg mb-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        {/* Form Fields */}
                        {/* Use handleChange and set the corresponding name attributes */}
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Select District</label>
                            <select name="district" value={formData.district} onChange={handleChange} className="border border-gray-300 p-2 rounded">
                                <option value="">Select District</option>
                                <option value="1">DISTRICT 1</option>
                                <option value="2">DISTRICT 2</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Select Seam</label>
                            <select name="seam" value={formData.seam} onChange={handleChange} className="border border-gray-300 p-2 rounded">
                                <option value="">Select Seam</option>
                                <option value="A">SEAM A</option>
                                <option value="B">SEAM B</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Select Machine at Fault</label>
                            <select name="machineFault" value={formData.machineFault} onChange={handleChange} className="border border-gray-300 p-2 rounded">
                                <option value="">Select Machine at Fault</option>
                                <option value="SDL">SDL</option>
                                <option value="LHD">LHD</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Machine Name</label>
                            <select name="machineName" value={formData.machineName} onChange={handleChange} className="border border-gray-300 p-2 rounded">
                                <option value="">Select Machine Name</option>
                                <option value="KA-1">KA-1</option>
                                <option value="KA-2">KA-2</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Incident Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 p-2 rounded" rows="3"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Impact</label>
                            <textarea name="impact" value={formData.impact} onChange={handleChange} className="border border-gray-300 p-2 rounded" rows="3"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Estimated Downtime (in Hours)</label>
                            <input type="number" name="downtime" value={formData.downtime} onChange={handleChange} className="border border-gray-300 p-2 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Action Taken</label>
                            <textarea name="action" value={formData.action} onChange={handleChange} className="border border-gray-300 p-2 rounded" rows="3"></textarea>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Alert Level</label>
                            <select name="level" value={formData.level} onChange={handleChange} className="border border-gray-300 p-2 rounded">
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
        </div>
    );
};

export default RaiseAlert;
