import React from 'react'
import { motion } from "framer-motion";
import { Plane } from "lucide-react";


const Footer = () => {
    
  return (
    <footer className="py-12 text-white bg-gray-900">
      {/* Logo Etrivox */}
            <motion.div
            className="flex items-center justify-center p-4 mb-"
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 5.5 }}
          >
            {/* Icone de l'aviation */}
            <Plane className="w-8 h-8 text-blue-600 " />
            <span className="x">Etrivox</span>
          </motion.div>
      <div className="container px-4 mx-auto">
        {/* Dispostion des colones de liens */}
        <div className="flex flex-wrap justify-center mb-12">
          {/* Colones liens utiles */}
          <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-semibold hover:text-blue-600">Liens utiles</h4>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Accueil</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Destinations</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Galerie</a></li>
            </ul>
          </div>
          {/* Colones réseau sociaux */}
          <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-bold hover:text-blue-600">Suivez nous</h4>
            <ul className="list-none">
               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Linkedlin</a></li>
            </ul>
          </div>
                    <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-bold hover:text-blue-600">Informations Légales</h4>
            <ul className="list-none">
               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Condition d'utulisation</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Politique de confidentialité</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Cookies</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer