import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Predefined credentials
    if (email === 'jules@mail.com' && password === 'password123') {
      // Successful login
      navigate('/home');
    } else {
      // Failed login
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <Link to="/" className="absolute top-4 left-4">
        <ArrowLeft className="text-green-700" />
      </Link>
      <img src="/scallergy-logo.svg" alt="Scallergy" className="w-24 h-24 mb-8" />
      <h1 className="text-2xl font-bold mb-8">Connexion</h1>
      <form className="w-full max-w-xs" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <Link to="/forgot-password" className="block text-sm text-right mb-4">
          Mot de passe oublié ?
        </Link>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded-full text-center"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
