import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/moritlogo.png";
export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white py-8">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
                    <img src={logo} alt="Smart Influencer Logo" className="mx-auto h-28 w-auto md:mx-0 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Moritsoft</h2>
                    <p className="text-sm">
                        La première agence web de transformation digitale à Marrakech, qui accompagne les grands et les petits projets pour monter leurs sites web, créer leurs propres logiciels de gestion et gérer leurs e-réputation sur les médias sociaux.
                    </p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Our services</a></li>
                        <li><a href="#" className="hover:underline">Our achievements</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="text-sm">
                        <li><a href="#" className="hover:underline">Web development</a></li>
                        <li><a href="#" className="hover:underline">Mobile development</a></li>
                        <li><a href="#" className="hover:underline">Consulting and strategy</a></li>
                        <li><a href="#" className="hover:underline">Natural referencing (SEO)</a></li>
                        <li><a href="#" className="hover:underline">Community management</a></li>
                        <li><a href="#" className="hover:underline">Emailing</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                    <ul className="text-sm">
                        <li className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            Appartement N°4 Centre d'Affaires Al Abraj 3, Immeuble C, Bd 11 Janvier, Marrakesh 40000
                        </li>
                        <li className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <a href="mailto:info@Moritsoft.ma" className="hover:underline">info@Moritsoft.ma</a>
                        </li>
                        <li className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <a href="mailto:direction@Moritsoft.ma" className="hover:underline">direction@Moritsoft.ma</a>
                        </li>
                        <li className="flex items-center mb-2">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            +212 668 513 685
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            +212 524 448 489
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                By Moritsoft
            </div>
        </footer>
    )
}
