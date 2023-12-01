import React from 'react';
import Title from './Title';
import missoes from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {
        missoes.map((missao, index) => {
          const { name, year, country, destination } = missao;
          return (
            <MissionCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          );
        })
      }
    </div>
  );
}

export default Missions;
