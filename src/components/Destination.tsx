import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Angleterre from "../assets/Angleterre.jpeg";
import Italie from "../assets/Italie.jpeg";
import LosAngeles from "../assets/LosAngeles.jpeg";
import NewYork from "../assets/NewYork.jpeg";
import Paris from "../assets/Paris.jpeg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// tableau des destinations
const destinations = [
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

const Destination = () => {
  // Utilisation de useInView pour les animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Destination d'Exception
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
            Voyagez dans les meilleurs conditions possible
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper py-10"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id} className="px-4">
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                
                >
                  <img
                    src={destination.image}
                    className="w-full h-64 object-cover mb-4"
                    alt={destination.name}
                  />
                  <div className="px-6 pb-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600">{destination.description}</p>
                    <p className="text-gray-600 font-semibold">
                      {destination.price}
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors duration-300">
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
