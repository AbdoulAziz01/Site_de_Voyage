import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, Calendar, User, Users, Mail, Phone } from "lucide-react";

// Interface pour définir les types des erreurs du formulaire
interface FormErrors {
  destination?: string;
  startDate?: string;
  travelers?: string;
  roomType?: string;
  specialRequests?: string;
}

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Stockage des données du formulaire
  const [bookingData, setBookingData] = useState({
    destination: "",
    startDate: "",
    travelers: "2",
    roomType: "standard",
    specialRequests: "",
  });

  // Stockage des erreurs de validation
  const [errors, setErrors] = useState<FormErrors>({});
  
  // État pour suivre les champs touchés par l'utilisateur
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Fonction de validation des champs du formulaire
  const validateField = (name: string, value: string) => {
    const newErrors: FormErrors = { ...errors };
    switch (name) {
      case "destination":
        if (!value) {
          newErrors.destination = "Veuillez sélectionner une destination";
        } else {
          delete newErrors.destination;
        }
        break;
      case "startDate":
        if (!value) {
          newErrors.startDate = "Veuillez sélectionner une date de départ";
        } else {
          delete newErrors.startDate;
        }
        break;
      case "travelers":
        if (!value || parseInt(value) < 1) {
          newErrors.travelers = "Le nombre de voyageurs doit être au moins 1";
        } else {
          delete newErrors.travelers;
        }
        break;
    }
    setErrors(newErrors);
  };

  // Gestionnaire de changement pour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  // Gestionnaire de blur pour marquer les champs comme touchés
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valider tous les champs
    Object.entries(bookingData).forEach(([name, value]) => {
      validateField(name, value);
    });
    
    // Marquer tous les champs comme touchés
    setTouched(Object.keys(bookingData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    // Vérifier s'il y a des erreurs
    if (Object.keys(errors).length === 0) {
      console.log('Données de réservation:', bookingData);
      // Ici vous pourriez envoyer les données à un backend
    }
  };
  
  return (
    <section ref={ref} id="booking" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:mb-6">
            Réservez votre voyage
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg lg:text-xl">
            Laissez-vous inspirer par nos destinations exotiques et laissez-vous
            captiver par nos expériences inoubliables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="p-8 rounded-lg shadow-lg bg-gray-50">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Plane className="w-5 h-5 mr-2 text-blue-500" />
                  Destination
                </label>
                <select 
                  name="destination"
                  value={bookingData.destination}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    touched.destination && errors.destination ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Sélectionnez une destination</option>
                  <option value="dakar">Dakar, Sénégal</option>
                  <option value="zanzibar">Zanzibar, Tanzanie</option>
                  <option value="marrakech">Marrakech, Maroc</option>
                </select>
                {touched.destination && errors.destination && (
                  <p className="text-sm text-red-500">{errors.destination}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Date de départ
                </label>
                <input 
                  type="date"
                  name="startDate"
                  value={bookingData.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    touched.startDate && errors.startDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {touched.startDate && errors.startDate && (
                  <p className="text-sm text-red-500">{errors.startDate}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  Nombre de personnes
                </label>
                <input 
                  type="number"
                  name="travelers"
                  value={bookingData.travelers}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min="1"
                  defaultValue="1"
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    touched.travelers && errors.travelers ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {touched.travelers && errors.travelers && (
                  <p className="text-sm text-red-500">{errors.travelers}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="w-5 h-5 mr-2 text-blue-500" />
                  Nom complet
                </label>
                <input 
                  type="text"
                  name="fullName"
                  placeholder="Votre nom complet"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Phone className="w-5 h-5 mr-2 text-blue-500" />
                  Téléphone
                </label>
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro de téléphone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-medium text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Réserver maintenant
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
