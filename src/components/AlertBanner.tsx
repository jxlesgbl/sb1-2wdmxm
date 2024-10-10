import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface AlertBannerProps {
  type: 'warning' | 'danger';
  message: string;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, message }) => {
  const bgColor = type === 'warning' ? 'bg-yellow-100' : 'bg-red-100';
  const textColor = type === 'warning' ? 'text-yellow-800' : 'text-red-800';

  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-lg flex items-start`}>
      <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default AlertBanner;