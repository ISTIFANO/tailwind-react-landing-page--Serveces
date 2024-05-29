import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import connect from "../assets/connect.gif";
import efacturation from "../assets/efacturation.gif";
import { FaPhoneAlt } from "react-icons/fa"; // Importation de l'icône de téléphone
import { Link } from "react-router-dom";
import website1 from "../assets/website1.jpg";
export default function NosRealisations() {
  const [sectionTitle, setSectionTitle] = useState("Sites Web"); // Titre de section initial

  // Fonction pour gérer les clics sur les boutons et mettre à jour le titre de la section
  const handleButtonClick = (title) => {
    setSectionTitle(title);
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonWebClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="container pt-11 mx-auto p-4">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-t-lg z-40"
            onClick={() => handleButtonClick("Sites Web")}
          >
            Sites Web
          </button>

          <button
            className="bg-zinc-200 text-zinc-800 py-2 px-4 rounded-t-lg"
            onClick={() => handleButtonClick("Logiciels")}
          >
            Logiciels
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold" id="sectionTitle">
            {sectionTitle}
          </h2>
        </div>

        <div
          className="flex flex-col mb-12 md:flex-row justify-center items-center gap-8"
          id="contentSection">
          {/* Rendu conditionnel en fonction du titre de la section */}
          {sectionTitle === "Sites Web" && (
            <>
              <div className="relative flex w-100 h-96 flex-col rounded-xl bg-zinc-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={website1} alt="Website 1" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Site Web 1
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc felis ligula.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link to="#" onClick={handleButtonWebClick}>
                    <button
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Voir Plus
                    </button>
                  </Link>
                </div>
                {isPopupVisible && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                 <div className="bg-white p-4 rounded-lg shadow-lg relative">
                   <button
                     className="absolute top-2 right-2 text-gray-700"
                     onClick={handleClosePopup}
                   >
                     &times;
                   </button>
                   <section className="overflow-hidden w-full h-full flex justify-center items-center rounded-lg shadow-2xl">
                     <img
                       src={website1}
                       alt="Website 1"
                       className="h-full w-full object-cover"
                     />
                   </section>
                 </div>
               </div>               
                )}
              </div>
              <div className="relative flex w-100 h-96 flex-col rounded-xl bg-zinc-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={website1} alt="Website 1" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Site Web 1
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc felis ligula.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link to="#" onClick={handleButtonWebClick}>
                    <button
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Voir Plus
                    </button>
                  </Link>
                </div>
                {isPopupVisible && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                 <div className="bg-white p-4 rounded-lg shadow-lg relative">
                   <button
                     className="absolute top-2 right-2 text-gray-700"
                     onClick={handleClosePopup}
                   >
                     &times;
                   </button>
                   <section className="overflow-hidden w-full h-full flex justify-center items-center rounded-lg shadow-2xl">
                     <img
                       src={website1}
                       alt="Website 1"
                       className="h-full w-full object-cover"
                     />
                   </section>
                 </div>
               </div>               
                )}
              </div>
              <div className="relative flex w-100 h-96 flex-col rounded-xl bg-zinc-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                  <img src={website1} alt="Website 1" />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Site Web 1
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc felis ligula.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link to="#" onClick={handleButtonWebClick}>
                    <button
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Voir Plus
                    </button>
                  </Link>
                </div>
                {isPopupVisible && (
                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                 <div className="bg-white p-4 rounded-lg shadow-lg relative">
                   <button
                     className="absolute top-2 right-2 text-gray-700"
                     onClick={handleClosePopup}
                   >
                     &times;
                   </button>
                   <section className="overflow-hidden w-full h-full flex justify-center items-center rounded-lg shadow-2xl">
                     <img
                       src={website1}
                       alt="Website 1"
                       className="h-full w-full object-cover"
                     />
                   </section>
                 </div>
               </div>               
                )}
              </div>
              {/* Ajouter d'autres contenus de sites Web ici */}
            </>
          )}

          {sectionTitle === "Logiciels" && (
            <>
              <Link to="/logiciel">
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt=""
                    src={efacturation}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <h3 className="mt-0.5 text-lg text-white">
                        GESTION COMMERCIALE
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
              <Link to="/logiciel">
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                  <img
                    alt=""
                    src={efacturation}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <h3 className="mt-0.5 text-lg text-white">
                        GESTION COMMERCIALE{" "}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae dolores, possimus pariatur animi
                        temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
              {/* Ajouter d'autres contenus de logiciels ici */}
            </>
          )}
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-slate-50 text-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Êtes-vous prêt à lancer votre entreprise en ligne ?
          </h2>
          <p className="text-xl mb-8">Contactez-nous</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-zinc-800 p-6 rounded-lg shadow-lg relative overflow-hidden group">
              <div className="animate-pulse absolute top-0 right-0 bottom-0 left-0 border-2 border-blue-500 rounded-lg"></div>
              <h3 className="text-2xl font-bold mb-4">Service client 24/7</h3>
              <p className="mb-4">
                Le support technique de Smart Influencer est disponible pour
                répondre à toutes vos questions et résoudre vos problèmes à tout
                moment.
              </p>
              <div className="flex items-center">
                <FaPhoneAlt className="w-10 h-10 mr-4" />
                <div>
                  <p className="font-bold">Téléphone</p>
                  <p>+212 668 513 685</p>
                </div>
              </div>
            </div>
            <div className="bg-white text-zinc-800 p-6 rounded-lg shadow-lg relative overflow-hidden group">
              <div className="animate-pulse absolute top-0 right-0 bottom-0 left-0 border-2 border-blue-500 rounded-lg"></div>
              <h3 className="text-2xl font-bold mb-4">
                Solutions intelligentes
              </h3>
              <p className="mb-4">
                Nous développons des solutions sur mesure, personnalisées et
                adaptées aux besoins des clients afin de répondre à leurs
                attentes. Smart Influencer vous accompagne pour une meilleure
                transformation digitale !
              </p>
              <Link
                to="/contactus
"
                className="text-blue-500 font-bold"
              >
                COMMENCER MAINTENANT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
