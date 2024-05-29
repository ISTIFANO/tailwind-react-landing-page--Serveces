import React from 'react';
import connect from '../assets/connect.gif';
import efacturation from '../assets/efacturation.gif';
import Smart from '../assets/Smart.gif';

import { Link } from "react-router-dom";
export default function Logiciels() {
  return (
    <div className="container mx-auto px-4 py-8">
       <div className="text-center">
       <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">NOS RÉALISATIONS
</h3>
          <h2 className="text-3xl font-extrabold text-zinc-900  pb-20 dark:text-white">DÉCOUVREZ NOS DERNIER PROJETS</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-300">
          <img src={connect} alt="E-facturation" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">E-facturation</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Efacturation is a simple and useful online invoicing software that allows you to easily create, edit, and print all your documents: quotes, invoices. Our solution is suitable for both self-employed individuals...</p>
          <div className="flex space-x-4">
          <Link to="/services" className="text-blue-500 hover:text-blue-700">
      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
        See More
      </button>
    </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Free Try</button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-300">
          <img src={efacturation} alt="Syndic Connect" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Syndic Connect</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Syndic Connect is the first online condominium management software in Morocco that allows you to manage your condominium online securely and independently...</p>
          <div className="flex space-x-4">
                 <Link to="/services" className="text-blue-500 hover:text-blue-700">
      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
        See More
      </button>
    </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Free Try</button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-300">
          <img src={efacturation} alt="Syndic Connect" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Syndic Connect</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Syndic Connect is the first online condominium management software in Morocco that allows you to manage your condominium online securely and independently...</p>
          <div className="flex space-x-4">
                 <Link to="/services" className="text-blue-500 hover:text-blue-700">
      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
        See More
      </button>
    </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Free Try</button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-teal-600 transition-all duration-300">
          <img src={Smart} alt="Smart Rental" className="w-full h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">Smart Rental</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Smart Rental is a comprehensive web solution for managing your online car rental agency...</p>
          <div className="flex space-x-4">
                 <Link to="/services" className="text-blue-500 hover:text-blue-700">
      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
        See More
      </button>
    </Link>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Free Try</button>
          </div>
        </div>

        </div>
         </div>
      

    </div>
  );
}
