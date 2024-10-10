import React from 'react';
import { Share2 } from 'lucide-react';

const Share: React.FC = () => {
  const handleShare = (platform: string) => {
    // In a real app, this would integrate with the platform's sharing API
    console.log(`Sharing on ${platform}`);
    alert(`Partage sur ${platform} simulé !`);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Partage</h2>
      <p className="mb-4">Partagez votre expérience Scallergy avec vos amis !</p>
      <div className="space-y-2">
        <button
          onClick={() => handleShare('Facebook')}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Share2 size={20} className="mr-2" />
          Partager sur Facebook
        </button>
        <button
          onClick={() => handleShare('Twitter')}
          className="w-full bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors flex items-center justify-center"
        >
          <Share2 size={20} className="mr-2" />
          Partager sur Twitter
        </button>
        <button
          onClick={() => handleShare('WhatsApp')}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <Share2 size={20} className="mr-2" />
          Partager sur WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Share;