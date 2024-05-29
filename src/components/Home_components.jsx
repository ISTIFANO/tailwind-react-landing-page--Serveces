import React from 'react';
import { Navbar, Card,Logiciels,Contactus, Process, MainSection, Footer } from './index';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Navbar />
      <MainSection />
      <Card />
      <Logiciels/>
      <Process />
      <Contactus />
      <Footer />
     
    </div>
  );
}

export default Home;


