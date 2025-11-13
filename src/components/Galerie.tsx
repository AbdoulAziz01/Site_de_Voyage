import React from 'react';

// Importation des images avec des noms de variables valides
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
    {
        url: img1,
        title: "Resort Beach",
    },
    {
        url: img2,
        title: "Mountain View",
    },
    {
        url: img3,
        title: "City Lights",   
    },
    {
        url: img4,
        title: "Desert Safari",
    },
    {
        url: img5,
        title: "Snowy Mountains",
    },    
    {
        url: img6,
        title: "Tropical Paradise",     
    },
    {
        url: img7,
        title: "Countryside Escape",
    },    
    {
        url: img8,
        title: "Lakeside Retreat",
    }]

const Galerie = () => {
     const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
  return (
    <section ref={ref} id="galerie" className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-center"
            >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Galerie de Photos
                </h2>
                <p className="max-w-2xl px-4 mx-auto mt-4 text-base text-gray-600 sm:text-lg md:px-0">
                    Explorez notre galerie de photos captivantes mettant en valeur les
                    destinations exotiques et les expériences inoubliables que nous
                    proposons.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 px-4 mt-12 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        className="relative overflow-hidden shadow-lg group prounded-lg"
                    >
                        <img
                            src={image.url}
                            alt={image.title}
                            className="object-cover w-full h-48 transition-transform duration-500 hover:scale-105 sm:h-52 md:h-60 lg:h-64 xl:h-72"
                        />
                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Galerie