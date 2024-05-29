// import React from 'react';
import connect from "../assets/connect.gif";
import efacturation from "../assets/efacturation.gif";
import Smart from "../assets/Smart.gif";

import { Link } from "react-router-dom";
export default function Logiciels() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-black">
          NOS RÉALISATIONS
        </h3>
        <h2 className="text-3xl font-extrabold text-zinc-900  pb-20 dark:text-black">
          DÉCOUVREZ NOS DERNIER PROJETS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300">
            <img
              src={connect}
              alt="Gestion Commerciale"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Gestion Commerciale{" "}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Un logiciel performant pour la gestion des ventes, des stocks et
              de la relation client dans une entreprise.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-700"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Voir Plus
                </button>
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Essai Gratuit
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300">
            <img
              src={efacturation}
              alt="Gestion des Projets"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Gestion des Projets
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Un outil indispensable pour planifier, suivre et gérer tous types
              de projets, du début à la fin.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-700"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Voir Plus
                </button>
              </Link>{" "}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Essai Gratuit
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300">
            <img
              src={efacturation}
              alt="Gestion des Assurances"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Gestion des Assurances
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Une solution efficace pour la gestion des contrats, des sinistres
              et des clients en assurance.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-700"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Voir Plus
                </button>
              </Link>{" "}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Essai Gratuit
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-red-600 transition-all duration-300">
            <img
              src={Smart}
              alt="Gestion des Écoles"
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Gestion des Écoles
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Un logiciel complet pour la gestion administrative et pédagogique
              des établissements scolaires
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="text-blue-500 hover:text-blue-700"
              >
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Voir Plus
                </button>
              </Link>{" "}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Essai Gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}