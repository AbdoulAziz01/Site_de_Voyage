import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
    {/* Contenu principal avec du tailwind qui dit qu'on veut une hauteur minimale de la page */}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Destination/>
      </div>
      {/* Barre de navigation */}
    </>
  );
}
