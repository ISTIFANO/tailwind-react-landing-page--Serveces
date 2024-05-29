// src/components/Blog.jsx

import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import seoImage from '../assets/seo.png';
import websiteImage from '../assets/Website.png';
import mobileImage from '../assets/mobile.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Optimisation de la Présence en Ligne : Conseils Essentiels pour Accroître la Visibilité de Votre Site Web',
      image: seoImage, // imported image
      excerpt: 'Dans le monde numérique actuel, la ...',
      slug: 'Article1' 
    },
    {
      id: 2,
      title: 'Quelles sont les étapes de création d’un site internet ?',
      image: websiteImage, // imported image
      excerpt: 'Aujourd’hui, il est très facile de créer un joli site web en peu de temps, mais, est ce que...',
      slug: 'Article2' 
    },
    {
      id: 3,
      title: 'Les applications mobile',
      image: mobileImage, // imported image
      excerpt: 'Les applications mobiles est un outil indispensable pour améliorer la relation avec les clients, ainsi que l’amélioration de la visibilité de votre business...',
      slug: 'Article3' }
  ];

  return (
    <>
     <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Actualités <br /> Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={`/${post.slug}`} className="text-blue-500 hover:underline">Lire la suite</Link>
            </div>
          </div>
        ))}
      </div>
    </div>


    <Footer/>    </>
  );
};



export default Blog;
