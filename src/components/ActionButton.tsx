import React from 'react';
import { Link } from 'react-router-dom';

interface ActionButtonProps {
  label: string;
  to: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, to }) => {
  return (
    <Link to={to} className="bg-green-600 text-white w-full py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center">
      {label}
    </Link>
  );
};

export default ActionButton;