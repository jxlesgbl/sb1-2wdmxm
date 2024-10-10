import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Share, AlertCircle, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-green-600 text-white flex justify-around items-center py-2">
      <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'opacity-100' : 'opacity-70'}`}>
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Accueil</span>
      </Link>
      <Link to="/share" className={`flex flex-col items-center ${isActive('/share') ? 'opacity-100' : 'opacity-70'}`}>
        <Share className="w-6 h-6" />
        <span className="text-xs mt-1">Partage</span>
      </Link>
      <Link to="/allergies" className={`flex flex-col items-center ${isActive('/allergies') ? 'opacity-100' : 'opacity-70'}`}>
        <AlertCircle className="w-6 h-6" />
        <span className="text-xs mt-1">Vos allergies</span>
      </Link>
      <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'opacity-100' : 'opacity-70'}`}>
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Profil</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;