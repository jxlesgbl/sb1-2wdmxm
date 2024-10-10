import React, { useState } from 'react';
import { Camera, Check } from 'lucide-react';

const ScanProduct: React.FC = () => {
  const [scanned, setScanned] = useState(false);

  const handleScan = () => {
    setScanned(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Scanner un produit</h2>
        <button
          onClick={handleScan}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4"
        >
          Scanner
        </button>
        <div className="relative mb-4">
          <img
            src="https://images.unsplash.com/photo-1610541021163-6e4c48b08296?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Barcode"
            className="w-full rounded-lg"
          />
          <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-lg"></div>
        </div>
        {scanned && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <img
                src="https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="La Barquette Chocolat"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold">La Barquette Chocolat</h3>
                <p className="text-sm text-gray-600">LU</p>
              </div>
            </div>
            <div className="flex items-center text-green-600">
              <Check className="w-5 h-5 mr-2" />
              <p>Pas d'allergènes dans ce produit !</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanProduct;