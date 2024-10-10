import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const OrganizeMeal: React.FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [newGuest, setNewGuest] = useState('');

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGuest.trim() !== '') {
      setGuests([...guests, newGuest.trim()]);
      setNewGuest('');
    }
  };

  const handleRemoveGuest = (index: number) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Organiser un repas</h2>
      <form onSubmit={handleAddGuest} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={newGuest}
            onChange={(e) => setNewGuest(e.target.value)}
            placeholder="Nom de l'invité"
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </form>
      <ul className="space-y-2 mb-4">
        {guests.map((guest, index) => (
          <li key={index} className="bg-gray-100 px-3 py-2 rounded-md flex justify-between items-center">
            {guest}
            <button
              onClick={() => handleRemoveGuest(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
      {guests.length === 0 && (
        <p className="text-gray-500 text-center">Aucun invité ajouté pour le moment.</p>
      )}
      <button
        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        disabled={guests.length === 0}
      >
        Planifier le repas
      </button>
    </div>
  );
};

export default OrganizeMeal;