import React from 'react';
import useAuth from '../../../customHooks/useAuth';

const ContactForm = () => {
  const { isDarkMode } = useAuth()

  return (
    <div className={` mx-auto p-6 shadow-xl rounded-lg ${isDarkMode ? 'bg-slate-500 text-white' : 'bg-green-300'}`}>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We'd love to hear from you. Fill out the form below to get in touch.</p>
      <form>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">Name:</label>
          <input className="border text-black border-gray-300 p-2 rounded-md w-full" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">Email:</label>
          <input className="border text-black border-gray-300 p-2 rounded-md w-full" type="email" id="email" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold" htmlFor="message">Message:</label>
          <textarea className="border text-black border-gray-300 p-2 rounded-md w-full" id="message" rows="4"></textarea>
        </div>
        <button className="btn rounded-md" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
