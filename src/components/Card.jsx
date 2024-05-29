import React from 'react';
import { FaCode } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import { IoConstructSharp } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Card() {
  const services = [
    {
      icon: <FaCode size={60} />,
      title: "Développement",
      description: "Découvrez notre site web dédié au développement, où innovation rencontre excellence."
    },
    {
      icon: <GiProcessor size={60} />,
      title: "Matériel informatique",
      description: "Découvrez notre site web dédié au monde passionnant du matériel informatique, où la performance rencontre la fiabilité."
    },
    {
      icon: <IoConstructSharp size={60} />,
      title: "Maintenance",
      description: "Explorez notre site web dédié à la maintenance informatique, où la fiabilité rencontre efficacité."
    },
    {
      icon: <BsFillPersonFill size={60} />,
      title: "Formation",
      description: "Découvrez notre site web dédié à la formation en informatique, où le savoir rencontre expérience."
    }
  ];

  return (
    <div className="h-auto pb-36 flex items-center justify-center bg-white w-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-zinc-800 dark:text-white">NOS SERVICES</h1>
        <div className="rounded-lg shadow-lg bg-white dark:bg-zinc-700">
     
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-zinc-400"
              >
                <div className="bg-white dark:bg-zinc-800 p-2 rounded-full shadow-lg mb-4">
                  {service.icon}
                </div>
                <h2 className="text-lg font-bold mb-2 text-zinc-800 dark:text-white">{service.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-center">{service.description}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}
