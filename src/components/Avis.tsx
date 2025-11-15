import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import { Star } from "lucide-react";

const avis = [
  {
    id: 1,
    role: "CEO",
    image: img9,
    name: "Abdoul Aziz Gueye",
    comment:
      "Etrivox a transformé ma façon de voyager. Leurs services personnalisés et leur attention aux détails ont rendu chaque voyage inoubliable. Je recommande vivement Etrivox à tous les passionnés de voyage.",
    rating: 5,
  },
  {
    id: 2,
    role: "Directeur commercial",
    image: img10,
    name: "EL Hadji Abdoul Aziz GUEYE",
    comment:
      "Grâce à Etrivox, j'ai découvert des destinations incroyables et vécu des expériences uniques. Leur équipe dévouée a pris soin de chaque aspect de mon voyage, me permettant de me détendre et de profiter pleinement. Merci Etrivox !",
    rating: 4.5,
  },
];
const Avis = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="avis"
      className="py-12 bg-gray-100 sm:py-16 lg:py-20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Le titre  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-4 text-2xl font-extrabold text-center text-gray-900 sm:text-3xl lg:mb-6">
            Avis de nos clients
          </h2>
          <p className="max-w-2xl mx-auto text-base text-center text-gray-600 sm:text-lg lg:text-xl">
            Voyagez avec Etrivox et laissez-vous inspirer par nos expériences
            inoubliables.
          </p>
        </motion.div>
        {/* Les avis */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2">
          {avis.map((avis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-4 transition-shadow duration-300 bg-white border rounded-lg shadow-md sm:p-6 hover:shadow-lg"
            >
              {/* Le commentaire de l'avis  */}
              <div className="flex items-center mb-4">
                <img
                  src={avis.image}
                  alt={`Photo de ${avis.name}`}
                  className="object-cover w-12 h-12 mr-3 rounded-full sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                />
              {/* Le nom de l'avis et son role est affiché ci-dessous */}
                <div>
                  <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg">
                    {avis.name}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {avis.role}
                  </p>
                </div>
              </div>
            {/* Les stars et le commentaire avec  */}
              <div className="flex items-center mb-4">
                {/* Les stars  */}
                {[...Array(4)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < avis.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-3 text-sm text-gray-700 sm:text-base sm:mt-4">
                {avis.comment}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avis;
