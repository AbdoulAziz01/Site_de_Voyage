import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Plane } from "lucide-react";

// Composant Navbar avec menu responsive et animations le const Navbar est défini ici
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Gestion de la barre de navigation et du scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // useEffect pour la gestion de la barre de navigation et du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Ajout de l'événement
    window.addEventListener("scroll", handleScroll);

    // Nettoyage à la fin du cycle de vie du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Verifier si on scrolle le background du navbar change

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      // si on scrolle le background du navbar change
      ${isScrolled ? "bg-white shadow" : "bg-transparent"}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-4 h-20" id="accueil">
          {/* Logo avec animation */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icone de l'aviation */}
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-gray-800 font-bold ml-2">Etrivox</span>
          </motion.div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                "Accueil",
                "Destinations",
                "Services",
                "À propos",
                "Contact",
                // .map pour itérer sur chaque item de la liste
              ].map((item) => (
                <motion.a
                  // key pour identifier chaque élément de la liste avec un identifiant unique href pour le lien vers la section correspondante
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile avec animation */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {[
                "Accueil",
                "Destinations",
                "Services",
                "À propos",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
