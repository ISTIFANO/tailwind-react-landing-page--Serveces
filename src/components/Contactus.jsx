import React from "react";
import "../assets/CSS/Main.css"; // Import external CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Contactus() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 contactus-container">
      <div className="w-full md:w-1/2 p-4 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-4 animate-slideIn">Need help?</h2>
        <p className="mb-6 animate-slideIn">Contact the world's most trusted IT services.</p>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full md:w-1/2 p-2 border border-zinc-300 rounded-md animate-borderPulse"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full md:w-1/2 p-2 border border-zinc-300 rounded-md animate-borderPulse"
            />
          </div>
          <input
            type="text"
            placeholder="Téléphone"
            className="w-full p-2 border border-zinc-300 rounded-md animate-borderPulse"
          />
          <textarea
            placeholder="Votre Message *"
            className="w-full p-2 border border-zinc-300 rounded-md animate-borderPulse"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:text-white hover:bg-blue-900"
          >
            Obtenez une consultation gratuite
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4 animate-fadeIn">
        <h3 className="text-3xl font-bold mb-4 animate-slideIn">Google Maps</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.972049177956!2d-8.02053568489665!3d31.63430888133112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafea4f4b0c5d3b%3A0x8f8c7c7b0c5d3b!2sJardin%20Majorelle!5e0!3m2!1sen!2sma!4v1633027294567!5m2!1sen!2sm"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}
