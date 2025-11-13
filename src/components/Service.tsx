import { useInView } from "react-intersection-observer";
import { Camera, Coffee, Compass, Hotel, Plane, Wine } from "lucide-react";
import { title } from "process";
import React from "react";
import { motion } from "framer-motion";

// Definition du tableau des services
// avec les icones et les descriptions

const services = [
  {
    icon: Plane,
    title: "Réservations de Vols",
    description:
      "Nous offrons des services de réservation de vols vers des destinations du monde entier, avec les meilleures compagnies aériennes.",
  },
  {
    icon: Hotel,
    title: "Réservations d'Hôtels",
    description:
      "Nous offrons des services de réservation d'hôtel sur tout le monde, avec des hôtels de haute qualité et des tarifs competitifs.",
  },
  {
    icon: Compass,
    title: "Guides de Voyage",
    description:
      "Nos guides de voyage experts vous aideront à planifier des itinéraires inoubliables et à découvrir les trésors cachés de chaque destination.",
  },
  {
    icon: Coffee,
    title: "Expériences Locales",
    description:
      "Nous proposons des expériences locales authentiques, vous permettant de vous immerger dans la culture et les traditions de chaque lieu que vous visitez.",
  },
  {
    icon: Wine,
    title: "Tours Gastronomiques",
    description:
      "Découvrez les délices culinaires du monde entier avec nos tours gastronomiques soigneusement conçus, mettant en avant les saveurs locales.",
  },
  {
    icon: Camera,
    title: "Services de Photographie",
    description:
      "Profitez de notre service de photographie professionnel, offrant des images captivantes et des moments inoubliables de votre voyage.",
  },
];
const Service = () => {
  // creation du hook useInView pour les animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section ref={ref} id="services" className="py-16 bg-white relative z-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Titre du service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
            Découvrez nos services exceptionnels conçus pour rendre votre voyage
            inoubliable et mémorable.
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 text-center transition-transform transform border rounded-lg shadow-lg bg-gray-50 hover:scale-105"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Service;
