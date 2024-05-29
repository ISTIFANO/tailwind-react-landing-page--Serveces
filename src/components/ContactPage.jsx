import React from 'react';

import "../assets/CSS/Main.css"; // Import external CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import contactus from '../assets/contactus.jpg';
import Footer from "./Footer";
export default function ContactPage() {
  return (
    <>
    <Navbar/>
     <br />

      <section>
        <div className="relative w-full h-96">
          <img
            className="absolute h-full w-full object-cover object-center"
            src={contactus}
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50"></div>
          <div className="relative pt-28 text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
              Contact Information
            </h2>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus.
            </p>
          </div>
        </div>
        <div className="-mt-16 mb-8 px-8">
          <div className="container mx-auto">
            <div className="py-12 flex flex-col lg:flex-row justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
              <div className="my-8 grid gap-6 px-4">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">956 ASKJOUR1, SOCOMA 3eme étage appartement n 5, Marrakech 40160 - Maroc</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">+212 661 31 61 91
  +212 624 024 308
  +212 660 61 63 63</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">contact@moritsoft.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">Open Support Ticket</p>
                </div>
              </div>
              <div className="py-4 w-full lg:w-1/2">
                <form action="#">
                  <div className="mx-auto flex w-11/12 max-w-screen-lg flex-col items-center">
                    <h2 className="font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">Leave Us A Message</h2>
                    <div className="mb-4 mt-8 flex w-full flex-col gap-4 md:flex-row md:gap-8">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="block w-full rounded-lg border border-blue-gray-200 bg-white py-2.5 px-3 text-sm font-normal outline-none focus:border-pink-500 focus:outline-0"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="block w-full rounded-lg border border-blue-gray-200 bg-white py-2.5 px-3 text-sm font-normal outline-none focus:border-pink-500 focus:outline-0"
                      />
                    </div>
                    <textarea
                      placeholder="Message"
                      className="mb-8 block w-full rounded-lg border border-blue-gray-200 bg-white py-2.5 px-3 text-sm font-normal outline-none focus:border-pink-500 focus:outline-0"
                    ></textarea>
                    <button
                      type="button"
                      className="middle none center mb-2 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
