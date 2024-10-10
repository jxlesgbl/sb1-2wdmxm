import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <img src="/scallergy-logo.png" alt="Scallergy" className="w-48 h-48 mb-8" />
      <Link
        to="/login"
        className="w-full max-w-xs bg-green-700 text-white py-3 rounded-full text-center mb-4"
      >
        Se connecter
      </Link>
      <Link
        to="/signup"
        className="w-full max-w-xs bg-green-700 text-white py-3 rounded-full text-center mb-4"
      >
        S'inscrire
      </Link>
      <Link
        to="/home"
        className="w-full max-w-xs bg-blue-600 text-white py-3 rounded-full text-center"
      >
        Accéder à l'application
      </Link>
    </div>
  );
};

export default Welcome;
