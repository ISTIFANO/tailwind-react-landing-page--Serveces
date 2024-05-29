import devvideo from '../assets/devvideo.mp4';
import { ReactTyped } from "react-typed";
import {Link} from "react-router-dom";
import logo from "../assets/moritlogo.png";
export default function MainSection() {
  return (
      <div className="relative overflow-hidden w-full h-screen">
         <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={devvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-5xl font-bold">Moritsoft</h1>
          <ReactTyped
              strings={["Boostez votre entreprise et rejoignez-nous dans le futur !"]}
              className="mt-4 text-xl"
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=""
              showCursor={true}
            />
          <p className="mt-6 max-w-2xl">
          {"MORITSOFT"} vous offre les meilleures solutions informatiques et technologiques. Nous disposons des moyens humains compétents, ingénieurs et techniciens, pour vous offrir des prestations de qualité.          </p>
          <div className="mt-8 flex space-x-4">
            <Link to="">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                VOIR NOS SOLUTIONS
              </button>
            </Link>
            <Link to="/ContactusPage">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                CONTACTER NOUS
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
  <img src={logo} alt="Moritsoft Logo" className="w-26  h-24" />
</div>

      </div>
  )
}