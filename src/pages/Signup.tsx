import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <Link to="/" className="absolute top-4 left-4">
        <ArrowLeft className="text-green-700" />
      </Link>
      <img src="/scallergy-logo.svg" alt="Scallergy" className="w-24 h-24 mb-8" />
      <h1 className="text-2xl font-bold mb-8">Inscription</h1>
      <form className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Âge
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmation du mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" required />
            <span className="text-sm">
              J'accepte les conditions générales et la politique de confidentialité
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-full text-center"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;