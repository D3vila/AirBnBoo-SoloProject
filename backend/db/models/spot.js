'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {});
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.hasMany(models.Review, { foreignKey: "spotId" })
    Spot.hasMany(models.Booking, { foreignKey: "spotId" })
    Spot.belongsTo(models.User, { foreignKey: "userId" })

  };
  return Spot;
};
