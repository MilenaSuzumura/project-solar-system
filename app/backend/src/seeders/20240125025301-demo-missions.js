const USA = 'Estados Unidos';
const URSS = 'URSS';

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Missions', [
      {
        id: 1,
        name: 'Apollo 11',
        year: 1960,
        country: USA,
        destination: 'Lua',
      },
      {
        id: 2,
        name: 'Voyager 1',
        year: 1977,
        country: USA,
        destination: 'Espaço interestelar',
      },
      {
        id: 3,
        name: 'Mars Pathfinder',
        year: 1996,
        country: USA,
        destination: 'Marte',
      },
      {
        id: 4,
        name: 'Estação Internacional Espacial',
        year: 1998,
        country: 'Estados Unidos e Rússia',
        destination: 'Órbita terrestre',
      },
      {
        id: 5,
        name: 'Kepler',
        year: 2009,
        country: USA,
        destination: 'Espaço interestelar',
      },
      {
        id: 6,
        name: 'Cassini-Huygens',
        year: 2009,
        country: 'Estados Unidos e União Europeia',
        destination: 'Saturno',
      },
      {
        id: 7,
        name: 'Mariner 2',
        year: 1962,
        country: USA,
        destination: 'Vênus',
      },
      {
        id: 8,
        name: 'Venera 4',
        year: 1967,
        country: URSS,
        destination: 'Vênus',
      },
      {
        id: 9,
        name: 'Mariner 5',
        year: 1967,
        country: USA,
        destination: 'Vênus',
      },
      {
        id: 10,
        name: 'Mariner 10',
        year: 1975,
        country: USA,
        destination: 'Vênus',
      },
      {
        id: 11,
        name: 'Venera 16',
        year: 1983,
        country: URSS,
        destination: 'Vênus',
      },
      {
        id: 12,
        name: 'MESSENGER',
        year: 2004,
        country: USA,
        destination: 'Mercúrio',
      },
      {
        id: 13,
        name: 'Genesis',
        year: 2001,
        country: USA,
        destination: 'Terra',
      },
      {
        id: 14,
        name: '2001 Mars Odyssey',
        year: 2001,
        country: USA,
        destination: 'Marte',
      },
      {
        id: 15,
        name: 'Mars Surveyor 98 Lander',
        year: 1999,
        country: USA,
        destination: 'Marte',
      },
      {
        id: 16,
        name: 'Nozomi (Planeta B)',
        year: 1998,
        country: 'Japão',
        destination: 'Marte',
      },
      {
        id: 17,
        name: 'Fobos 1',
        year: 1988,
        country: URSS,
        destination: 'Marte',
      },
      {
        id: 18,
        name: 'Fobos 2',
        year: 1988,
        country: URSS,
        destination: 'Marte',
      },
      {
        id: 19,
        name: 'Galileo',
        year: 1989,
        country: USA,
        destination: 'Júpiter',
      },
      {
        id: 20,
        name: 'Cassini/Huygens',
        year: 1997,
        country: 'Estados Unidos e Europa',
        destination: 'Saturno',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Missions', null, {});
  }
};
