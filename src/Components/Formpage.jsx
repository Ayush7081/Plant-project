import React, { useState } from "react";
import Navbar from "./Navbar";

const Formpage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    interest: '',
    projectDetail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams(formData);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz9BBrHibYXR5lbZPnjMcKkAhL3qr1j_oiRf7LBF_QB7EV3sg0D3x6YJNIY_dZncHye/exec', {
        method: 'POST',
        body: formBody,
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          interest: '',
          projectDetail: '',
        });
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 bg-save-nature bg-no-repeat bg-cover">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-3xl font-normal text-black">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Let's Discuss Your Project
        </h2>
        <h3 className="text-lg mb-6 text-center text-black">
          If you have a project, please let us know. Feel free to use this form to tell us about your project and how you think we can help.
        </h3>
        <form onSubmit={handleSubmit} name="Clients Data" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="block ">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block ">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block ">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
                placeholder="Company Name"
                required
              />
            </div>
            <div>
              <label className="block ">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block ">I am Interested in</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              required
            >
              <option value="">Select...</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label className="block ">Tell us about your project</label>
            <textarea
              name="projectDetail"
              value={formData.projectDetail}
              onChange={handleChange}
              rows="4"
              className="w-full border-b border-gray-400 p-2 focus:outline-none focus:border-black"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-200 text-black px-8 py-3 rounded-full hover:bg-green-300 focus:outline-none transform transition duration-300 hover:scale-105"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
 </div> 
 );
};

export default Formpage;
