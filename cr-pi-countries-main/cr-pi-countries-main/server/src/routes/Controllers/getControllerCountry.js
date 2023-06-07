//por si no se ve en sql SET client_encoding TO 'UTF8';

const { Sequelize } = require('sequelize');
const {Countries, Activities} = require ('../../db');


const allCountry =  async () =>{
    return await Countries.findAll();
};

const countryById = async (idCountryi)=>{
    try {
        const country = await Countries.findByPk(idCountryi, {
        include: [
            {
                model: Activities,
                attributes: ["name", "difficulty", "duration", "season"],
                through: { attributes: [] },
            },
    ]})
    
            if (country) {return country}else{return "Country not found"}} 
        catch (error) {
		res.status(404).json({error:error.message});
        
    }
    
}



module.exports = {allCountry, countryById};