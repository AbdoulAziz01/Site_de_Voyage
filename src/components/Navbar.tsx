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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow" : "bg-transparent"}`}
      aria-label="Navigation principale"
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
                { name: "Accueil", id: "accueil" },
                { name: "Destinations", id: "destinations" },
                { name: "Services", id: "services" },
                { name: "À propos", id: "a-propos" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <motion.a
                  // key pour identifier chaque élément de la liste avec un identifiant unique href pour le lien vers la section correspondante
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05, color: "#2563eb" }}
                  aria-current={item.id === 'accueil' ? 'page' : undefined}
                >
                  {item.name}
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
                { name: "Accueil", id: "accueil" },
                { name: "Destinations", id: "destinations" },
                { name: "Services", id: "services" },
                { name: "À propos", id: "a-propos" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
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
