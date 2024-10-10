import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState({
    name: 'Billy Adventure',
    email: 'billy@adventure.com',
    organization: 'Adventure Inc.',
    age: '30',
    sex: 'Male'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated profile to a server
    console.log('Updated profile:', profile);
    alert('Profil mis à jour!');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profil</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organisation</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={profile.organization}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Âge</label>
          <input
            type="number"
            id="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sexe</label>
          <select
            id="sex"
            name="sex"
            value={profile.sex}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="Male">Homme</option>
            <option value="Female">Femme</option>
            <option value="Other">Autre</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Mettre à jour le profil
        </button>
      </form>
    </div>
  );
};

export default Profile;