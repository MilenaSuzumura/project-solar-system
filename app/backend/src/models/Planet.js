'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planets extends Model {
    static associate(models) {
      // define association here
    }
  }
  Planets.init({
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Planets',
  });
  return Planets;
};