const axios = require("axios");


const allCountry =  async () =>{
    const country =  (await axios.get("http://localhost:5000/countries")).data;
    return country.map(ele => (
        {id:ele.cca3,
        name: ele.name.common,
        image: ele.flags.svg,
        continent: ele.continents[0],
        capital:ele.capital ? ele.capital[0] : "Not Found",
        subregion: ele.subregion ? ele.subregion : "Not Found",
        area: ele.area,
        population: ele.population,}));
};


module.exports = {allCountry};