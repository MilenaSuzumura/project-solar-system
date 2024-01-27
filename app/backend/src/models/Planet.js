module.exports = (sequelize, DataTypes) => {
  const PlanetModel = sequelize.define('Planet', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    image: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('picture').toString('utf8'); // or whatever encoding is right
      },
    },
  }, {
    timestamps: false,
    tableName: 'Planets',
    underscored: true,
  });

  

  return PlanetModel;
};