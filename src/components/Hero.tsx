import AppPhoto from "../assets/AppPhoto.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Image de fond */}
      <div
        className="absolute inset-0 z-0"
        // Style dynamique de l'image de fond
        style={{
          backgroundImage: `url(${AppPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenu du Hero */}
      {/* le tailwind dit qu'on veut une hauteur minimale de la page et qu'on veut centrer le contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          {/* animation pour le texte et le bouton avec framer motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl font-bold md:text-5xl">
              Découvrer le monde avec Etrivox
            </h1>
            <p className="text-xl md:text-2xl max-w-xl">
              Votre aventure commence ici. Explorez des destinations exotiques,
              profitez de services exclusifs et créez des souvenirs
              inoubliables.
            </p>
            {/* ici j'utilise le framer motion pour l'animation du bouton */}
            <motion.button className="bg-blue-600  flex items-center space-x-2 text-lg text-amber-50 px-6 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale : 1.05 }}
            whileTap={{ scale : 1.05 }}
            >
              <span>Réservez maintenant</span>
              {/* Icône de fleche */}
              <ArrowRight className="w-5 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
