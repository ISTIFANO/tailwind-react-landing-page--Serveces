/* eslint-disable react/no-unknown-property */
// import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillYoutube,
    AiFillLinkedin,
  } from "react-icons/ai"; // Import icons from react-icons
  import devvideo from "../assets/syndic.gif";
  import Navbar from "./Navbar";
  // import { BrowserRouter as Router, Route } from 'react-router-dom';
  import Footer from "./Footer";
  import idea from "../assets/idea.png";
  import planing from "../assets/planning.png";
  import aplication from "../assets/application.png";
  // import coproprieteDigitalImage from '../assets/copropriete-digital.jpeg';
  import coding from "../assets/coding.png";
  import dlogiciel from "../assets/dlogiciel.jpeg";
  // import logo from "../assets/moritlogo.png";
   import { Link } from 'react-router-dom';
  export default function Services() {
    const cards = [
      { title: "Contract management", icon: "mdi-file-document-outline" },
      { title: "Work management", icon: "mdi-briefcase-outline" },
      {
        title: "Creating the provisional budget",
        icon: "mdi-file-document-outline",
      },
  
      { title: "Maintenance book management", icon: "mdi-book-outline" },
      {
        title: "Management of general meetings",
        icon: "mdi-account-group-outline",
      },
      { title: "Easy to use dashboard", icon: "mdi-view-dashboard-outline" },
      { title: "Automatic load distribution", icon: "mdi-chart-bar" },
      {
        title: "Management of bank reconciliation statements",
        icon: "mdi-bank-outline",
      },
    ];
  
    return (
      <>
        <Navbar />
        {/* <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url(${coproprieteDigitalImage})`}}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 text-white">
                  <h1 className="text-5xl font-bold">Moritsoft</h1>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-4 bg-zinc-800 bg-opacity-75 p-2 rounded">
                  <div className="flex items-center space-x-2">
                      <img src={logo} alt="home" className="w-6 h-6" />
                      <span><Link to="/Home">ACCUEIL</Link> </span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <span>•</span>
                      <span className="font-bold">Moritsoft</span>
                  </div>
              </div>
          </div> */}
        <div className="flex flex-col md:flex-row items-center p-6 bg-white dark:bg-zinc-800">
          <div className="md:w-1/2 md:ml-20">
            <img
              src={devvideo}
              alt="devvideo"
              className="w-full h-auto md:w-96 md:h-96 mb-6 md:mb-0 rounded-lg"
              style={{ border: "2px solid #ccc" }}
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Logiciel de gestion de Copropriété
            </h2>
            <a href="#" className="text-teal-600 dark:text-teal-400">
              Logiciel De Gestion
            </a>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              Syndic Connect est un logiciel de gestion de Copropriété en ligne,
              en toute autonomie et sécurité. Ce logiciel est destiné aux syndics
              bénévoles et professionnels pour leur faciliter le contrôle et la
              gestion de copropriété.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-zinc-500 dark:text-zinc-400 flex items-center justify-center w-10 h-10 border border-zinc-500 dark:border-zinc-400 rounded-full"
              >
                <AiFillFacebook />
              </a>
              <a
                href="#"
                className="text-zinc-500 dark:text-zinc-400 flex items-center justify-center w-10 h-10 border border-zinc-500 dark:border-zinc-400 rounded-full"
              >
                <AiFillInstagram />
              </a>
              <a
                href="#"
                className="text-zinc-500 dark:text-zinc-400 flex items-center justify-center w-10 h-10 border border-zinc-500 dark:border-zinc-400 rounded-full"
              >
                <AiFillYoutube />
              </a>
              <a
                href="#"
                className="text-zinc-500 dark:text-zinc-400 flex items-center justify-center w-10 h-10 border border-zinc-500 dark:border-zinc-400 rounded-full"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div className="bg-teal-600 text-white p-4 mt-6 rounded-lg">
              <p className="mb-2">
                <strong>Téléphone:</strong> +212 668 513 685
              </p>
              <p className="mb-2">
                <strong>Email:</strong> support@syndicconnect.ma
              </p>
              <p>
                <strong>Site web:</strong>{" "}
                <a href="https://syndicconnect.ma" className="underline">
                  https://syndicconnect.ma
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Section 1 for info services */}
        <section className="py-10 px-4 bg-white dark:bg-zinc-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
              PHASES DE DÉVELOPPEMENT DE LAPPLICATION
            </h2>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-2">
              Syndic Connect
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Syndic Connect a passé par plusieurs étapes avant son lancement
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-left">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Phase 1:
              </h4>
              <h5 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
                Découverte et idéation
              </h5>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Léquipe de Smart Influencer a investi son savoir-faire et son
                expertise dans le développement dapplications qui résolvent des
                problèmes dans la société. À travers le brainstorming, notre
                équipe a trouvé ...
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <img src={idea} alt="Brain and Lightbulb" className="w-64 h-56" />
            </div>
          </div>
          {/* Section 2 */}
          <div className="mt-10 max-w-4xl mx-auto pt-7 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center md:order-1">
              <img
                src={planing}
                alt="Brain and Lightbulb"
                className="w-64 h-56"
              />
            </div>
            <div className="md:w-2/3 text-left md:order-2">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Phase 2:
              </h4>
              <h5 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
                Développement et Test
              </h5>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Pendant cette phase, léquipe a développé des fonctionnalités clés
                et a effectué des tests rigoureux pour garantir la qualité et la
                fiabilité de lapplication.
              </p>
            </div>
          </div>
          {/* Section 3 */}
          <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-left">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Phase 3:
              </h4>
              <h5 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
                Déploiement et Feedback
              </h5>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Après les tests internes, lapplication a été déployée et des
                retours ont été collectés pour des améliorations continues.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <img src={aplication} alt="Deployment" className="w-64 h-56" />
            </div>
          </div>
          {/* Section 4 */}
          <div className="mt-10 max-w-4xl mx-auto pt-7 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center md:order-1">
              <img src={coding} alt="Coding" className="w-64 h-56" />
            </div>
            <div className="md:w-2/3 text-left md:order-2">
              <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Phase 4:
              </h4>
              <h5 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-2">
                Maintenance et Améliorations
              </h5>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                Lapplication est en constante évolution avec des mises à jour
                régulières basées sur les retours des utilisateurs et les
                nouvelles exigences du marché.
              </p>
            </div>
          </div>
          {/* section 4 */}
          <div className="text-center  pt-7">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              NOS RÉALISATIONS
            </h3>
            <h2 className="text-3xl font-extrabold text-zinc-900  pb-20 dark:text-white">
              DÉCOUVREZ NOS DERNIER PROJETS
            </h2>
          </div>
  
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md border-animate"
                >
                  <h3 className="text-center text-zinc-800 dark:text-zinc-200 mb-4">
                    {card.title}
                  </h3>
                  <i
                    className={`mdi ${card.icon} text-6xl text-center block mx-auto text-zinc-800 dark:text-zinc-200`}
                  ></i>
                </div>
              ))}
            </div>
          </div>
          {/* Add this to your CSS file or within a <style> tag in your component */}
          <style jsx>{`
            .border-animate {
              position: relative;
              overflow: hidden;
            }
  
            .border-animate::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: 2px solid transparent;
              border-top-color: #6366f1;
              border-bottom-color: #6366f1;
              animation: borderAnimation 2s infinite;
            }
  
            @keyframes borderAnimation {
              0% {
                transform: scaleX(0);
              }
              50% {
                transform: scaleX(1);
              }
              100% {
                transform: scaleX(0);
              }
            }
          `}</style>
          {/* section 5 */}
  
          <div className="flex flex-col md:flex-row items-center pt-16 p-6 bg-white dark:bg-zinc-800">
            <div className="md:w-1/2">
              <img
                src={dlogiciel}
                alt="Mobile application"
                className="rounded-lg w-96 shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h2 className="text-2xl font-thin text-zinc-900 dark:text-white">
                Mobile application integrated into the{" "}
                <span className="font-semibold">software</span>
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                In order to make life easier for co-owners, adapt to their daily
                lives and be ever more responsive and transparent, Syndic Connect
                continues to digitize its services.
              </p>
              <Link to="/ContactPage">
              <button className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                See More
              </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-4 md:p-8 contactus-container">
            <div className="w-full md:w-1/2 p-4 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-4 animate-slideIn">
                Need help?
              </h2>
              <p className="mb-6 animate-slideIn">
                Contact the worlds most trusted IT services.
              </p>
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
              <h3 className="text-3xl font-bold mb-4 animate-slideIn">
                Google Maps
              </h3>
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
        </section>
        <Footer />
      </>
    );
  }
  