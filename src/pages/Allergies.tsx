import React, { useState } from 'react';
import { X } from 'lucide-react';

const Allergies: React.FC = () => {
  const [allergies, setAllergies] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState('');

  const handleAddAllergy = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAllergy.trim() !== '') {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy('');
    }
  };

  const handleDeleteAllergy = (index: number) => {
    setAllergies(allergies.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Vos allergies</h2>
      <form onSubmit={handleAddAllergy} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={newAllergy}
            onChange={(e) => setNewAllergy(e.target.value)}
            placeholder="Entrez une allergie"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
          >
            Ajouter
          </button>
        </div>
      </form>
      <ul className="space-y-2">
        {allergies.map((allergy, index) => (
          <li key={index} className="bg-gray-100 px-3 py-2 rounded-md flex justify-between items-center">
            {allergy}
            <button
              onClick={() => handleDeleteAllergy(index)}
              className="text-red-600 hover:text-red-800"
            >
              <X size={20} />
            </button>
          </li>
        ))}
      </ul>
      {allergies.length === 0 && (
        <p className="text-gray-500 text-center">Aucune allergie ajoutée pour le moment.</p>
      )}
    </div>
  );
};

export default Allergies;