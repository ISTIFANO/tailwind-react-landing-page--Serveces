/* eslint-disable react/no-unknown-property */

import { FaCogs, FaCalendarAlt, FaClipboardList, FaRocket } from 'react-icons/fa';

export default function Process() {
  return (
    <div className="bg-white dark:bg-zinc-800 py-12 w-screen">
      <style jsx>{`
        @keyframes borderAnimation {
          0% {
            border-color: transparent;
          }
          50% {
            border-color: #4f46e5;
          }
          100% {
            border-color: transparent;
          }
        }

        .animated-border {
          animation: borderAnimation 3s infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">COMMENT NOUS TRAVAILLONS
</h3>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Processus</h2>
          <div className="mt-2 border-t-2 border-indigo-600 w-24 mx-auto"></div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white dark:bg-zinc-700 p-6 border animated-border border-zinc-200 dark:border-zinc-600 rounded-lg text-center">
            <FaCogs className="text-5xl text-indigo-600 mx-auto mb-4" />
             <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Choisissez un service
</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Lorsque l’internaute visite notre site, il choisit le service qui va résoudre ses problèmes.

</p>
          </div>
          <div className="bg-white dark:bg-zinc-700 p-6 border animated-border border-zinc-200 dark:border-zinc-600 rounded-lg text-center">
            <FaCalendarAlt className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Demander une réunion</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Nous effectuons une réunion avec le client pour savoir ses priorités et ses objectifs afin d’élaborer un plan marketing.

</p>
          </div>
          <div className="bg-white dark:bg-zinc-700 p-6 border animated-border border-zinc-200 dark:border-zinc-600 rounded-lg text-center">
            <FaClipboardList className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Recevoir un plan personnalisé
</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Nous envoyons à nos clients un plan détaillé qui englobe toutes les informations dont le client a besoin.

</p>
          </div>
          <div className="bg-white dark:bg-zinc-700 p-6 border animated-border border-zinc-200 dark:border-zinc-600 rounded-lg text-center">
            <FaRocket className="text-5xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Passer à l’action
</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Après avoir comprendre le besoin et les objectifs de nos clients, nos développeurs commencent leur travail.

</p>
          </div>
        </div>
      </div>
    </div>
  );
}
