import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";


const images = [
    {
        id: 1,
        url: img9,
        role:"CEO",
        image: img9,
        name: "Abdoul Aziz Gueye",
        comment: "Etrivox a transformé ma façon de voyager. Leurs services personnalisés et leur attention aux détails ont rendu chaque voyage inoubliable. Je recommande vivement Etrivox à tous les passionnés de voyage.",
        rating: 5
       },

       {
        id: 2,
        url: img10,
        role:"Directeur commmercial",
        image: img10,
        name: "EL Hadji Abdoul Aziz GUEYE",
        comment: "Grâce à Etrivox, j'ai découvert des destinations incroyables et vécu des expériences uniques. Leur équipe dévouée a pris soin de chaque aspect de mon voyage, me permettant de me détendre et de profiter pleinement. Merci Etrivox !",
        rating: 4.5
       },

]
const Avis = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    return (
        <section ref={ref} id="avis" className="py-20 bg-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Le titre  */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900">Avis de nos clients</h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Avis;