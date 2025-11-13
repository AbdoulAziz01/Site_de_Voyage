import Destination from "./components/Destination";
import Galerie from "./components/Galerie";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Avis from "./components/Avis";

export default function App() {
  return (
    <>
    {/* Contenu principal avec du tailwind qui dit qu'on veut une hauteur minimale de la page */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Destination/>
        <Service/>
        <Galerie/>
        <Avis/>
      </div>
      {/* Barre de navigation */}
    </>
  );
}
