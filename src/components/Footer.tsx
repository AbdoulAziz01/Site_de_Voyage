import React from 'react'

const Footer = () => {
    
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-4 mx-auto">
        {/* Dispostion des colones de liens */}
        <div className="flex flex-wrap justify-center mb-12">
          {/* Colones liens utiles */}
          <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-semibold">Liens utiles</h4>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Accueil</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Destinations</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Galerie</a></li>
            </ul>
          </div>
          {/* Colones réseau sociaux */}
          <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-bold">Suivez nous</h4>
            <ul className="list-none">
               <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-blue-600">Linkedlin</a></li>
            </ul>
          </div>
                    <div className="w-full p-4 md:w-1/3">
            <h4 className="mb-4 text-lg font-bold">Informations Légales</h4>
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