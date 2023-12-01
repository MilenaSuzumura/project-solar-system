import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planetas from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {
        planetas.map((planeta) => {
          const { name, image } = planeta;
          return (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          );
        })
      }
    </div>
  );
}

export default SolarSystem;
