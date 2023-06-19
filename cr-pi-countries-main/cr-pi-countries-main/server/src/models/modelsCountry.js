const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    id:{
      type:DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
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