import React from 'react';
import AlertBanner from '../components/AlertBanner';
import ActionButton from '../components/ActionButton';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <AlertBanner 
        type="warning"
        message="Votre localisation est sujette à une vigilance jaune au pollen. Faites attention !"
      />
      <ActionButton label="Scanner un produit" to="/scan" />
      <ActionButton label="Organiser un repas" to="/organize-meal" />
    </div>
  );
};

export default Home;