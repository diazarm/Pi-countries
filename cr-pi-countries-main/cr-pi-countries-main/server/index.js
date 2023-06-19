const axios = require("axios");
const server = require("./src/server");
const { conn, Countries } = require('./src/db.js');
const PORT = 3001;
const cors = require("cors");


conn.sync({ altern: true }).then(() => {  //altern - force
server.listen(PORT, async() => {
  const dbCountries = Countries.findAll();
  if(!dbCountries.length){
    const urlApi = await axios.get("http://localhost:5000/countries");
    const infoApi = await urlApi.data.map((ele)=>{
      return{
        id:ele.cca3,
        name: ele.name.common,
        flag: ele.flags.svg,
        continent: ele.continents[0],
        capital:ele.capital ? ele.capital[0] : "Not Found",
        subregion: ele.subregion ? ele.subregion : "Not Found",
        area: ele.area,
        population: ele.population,
      };
    });
    for (let i = 0; i < infoApi.length; i++) {
      await Countries.findOrCreate({
        where: { name: infoApi[i].name },
        defaults: { ...infoApi[i] }, // Agregar el operador spread para pasar los campos individuales
      });
    }
  }
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
//inicio y prueba

//! Para solucionar la codificacion por defecto de sqlshell a utf8
//SHOW client_encoding;
//SET client_encoding = 'UTF8';