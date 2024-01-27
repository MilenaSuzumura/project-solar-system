module.exports = (sequelize, DataTypes) => {
  const MissionModel = sequelize.define('Mission', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    country: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'Missions',
    underscored: true,
  });

/*   UserModel.associate = (models) => {
    UserModel.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId'
    }); */

  return MissionModel;
};