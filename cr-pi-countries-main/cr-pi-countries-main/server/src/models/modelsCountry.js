const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {sequelize.define('Countries', {
    id:{
      type:DataTypes.STRING(3),
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },{timestamps: false});
};