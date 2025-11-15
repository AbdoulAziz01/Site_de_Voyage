// Validation des dates
export const isValidDate = (dateString: string): boolean => {
  const selectdate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Réinitialiser l'heure pour comparer uniquement les dates
    return selectdate >= today;
};
// Validation de la periode de voyage
export const isDaterangeValid = (startDate: string, returnDate: string): boolean => {
  const start = new Date(startDate);
  const return_ = new Date(returnDate);
  return return_ > start;
};

// Message d'erreur pour les champs obligatoires
export const errorMessage = {
    required: 'Ce champ est obligatoire.',
    invalidDate: 'Veuillez sélectionner une date valide.',
    invalidDaterange: 'La date de retour doit être postérieure à la date de départ.',
    invalidTravelers: 'Le nombre de voyageurs doit être compris entre 1 et 10.',
    invalidRoomType: 'Veuillez sélectionner un type de chambre valide.',
    rompType: 'Veuillez sélectionner un type de chambre.',
    SpecialRequests: 'Veuillez saisir des exigences spéciales valides.',
}