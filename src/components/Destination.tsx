import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Angleterre from "../assets/Angleterre.jpeg";
import Italie from "../assets/Italie.jpeg";
import LosAngeles from "../assets/LosAngeles.jpeg";
import NewYork from "../assets/NewYork.jpeg";
import Paris from "../assets/Paris.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Type pour les destinations
interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

// Tableau des destinations
const destinations: Destination[] = [
  {
    id: 1,
    name: "Italie",
    image: Italie,
    description: "Pardis tropical avec villa sur mer",
    price: "500$",
  },
  {
    id: 2,
    name: "Angletterre",
    image: Angleterre,
    description: "Pardis tropical avec villa sur mer",
    price: "500$",
  },
  {
    id: 3,
    name: "Los Angeles",
    image: LosAngeles,
    description: "Pardis tropical avec villa sur mer",
    price: "500$",
  },
  {
    id: 4,
    name: "New York",
    image: NewYork,
    description: "Pardis tropical avec villa sur mer",
    price: "500$",
  },
  {
    id: 5,
    name: "Paris",
    image: Paris,
    description: "Pardis tropical avec villa sur mer",
    price: "500$",
  },
];

const Destination: React.FC = () => {
  // Utilisation de useInView pour les animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="destinations">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Destination d'Exception
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 ">
            Voyagez dans les meilleurs conditions possible
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            modules={[EffectCoverflow, Navigation, Pagination]}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { 
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 30
              },
            }}
            className="w-full py-10"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id} className="px-4">
                <motion.div
                  className="overflow-hidden bg-white rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                
                >
                  <img
                    src={destination.image}
                    className="object-cover w-full h-64 mb-4"
                    alt={destination.name}
                  />
                  <div className="px-6 pb-6 space-y-4">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600">{destination.description}</p>
                    <p className="font-semibold text-sky-600">
                      {destination.price}
                    </p>
                    <button className="w-full px-6 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
                      Resevez maintenant
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Destination;
