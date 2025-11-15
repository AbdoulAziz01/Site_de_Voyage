import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Service from "./components/Service";
import Galerie from "./components/Galerie";
import Avis from "./components/Avis";
import Booking from "./components/Booking";

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
        <Booking/>
      </div>
      {/* Barre de navigation */}
    </>
  );
}
