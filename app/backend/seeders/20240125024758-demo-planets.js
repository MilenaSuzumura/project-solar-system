const MercurioImg = require('./images/Mercurio.png');
const VenusImg = require('./images/Venus.png');
const TerraImg = require('./images/Terra.png');
const MarteImg = require('./images/Marte.png');
const JupiterImg = require('./images/Jupiter.png');
const SaturnoImg = require('./images/Saturno.png');
const Uranoimg = require('./images/Urano.png');
const Netunoimg = require('./images/Netuno.png');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Planets', [
      { id: 1, name: 'Mercúrio', image: MercurioImg },
      { id: 2, name: 'Vênus', image: VenusImg },
      { id: 3, name: 'Terra', image: TerraImg },
      { id: 4, name: 'Marte', image: MarteImg },
      { id: 5, name: 'Júpiter', image: JupiterImg },
      { id: 6, name: 'Saturno', image: SaturnoImg },
      { id: 7, name: 'Urano', image: Uranoimg },
      { id: 8, name: 'Netuno', image: Netunoimg },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
