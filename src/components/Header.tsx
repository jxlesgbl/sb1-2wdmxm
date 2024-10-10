import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
      <Link to="/" className="flex items-center">
        <Leaf className="text-green-600 w-8 h-8 mr-2" />
        <h1 className="text-xl font-semibold text-green-800">Scallergy</h1>
      </Link>
      <Link to="/profile" className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-2 text-sm font-medium">Billy Adventure</span>
      </Link>
    </header>
  );
};

export default Header;