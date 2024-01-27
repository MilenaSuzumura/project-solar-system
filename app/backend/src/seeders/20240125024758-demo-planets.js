/* const MercurioImg = require('./images/Mercurio.png');
const VenusImg = require('./images/Venus.png');
const TerraImg = require('./images/Terra.png');
const MarteImg = require('./images/Marte.png');
const JupiterImg = require('./images/Jupiter.png');
const SaturnoImg = require('./images/Saturno.png');
const Uranoimg = require('./images/Urano.png');
const Netunoimg = require('./images/Netuno.png'); */
/*       { id: 1, name: 'Mercúrio', image: MercurioImg },
      { id: 2, name: 'Vênus', image: VenusImg },
      { id: 3, name: 'Terra', image: TerraImg },
      { id: 4, name: 'Marte', image: MarteImg },
      { id: 5, name: 'Júpiter', image: JupiterImg },
      { id: 6, name: 'Saturno', image: SaturnoImg },
      { id: 7, name: 'Urano', image: Uranoimg },
      { id: 8, name: 'Netuno', image: Netunoimg }, */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Planets', [
      {  name: 'Mercúrio', image: './images/Mercurio.png', createdAt: new Date(), updatedAt: new Date() }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Planets', null, {});
  }
};
