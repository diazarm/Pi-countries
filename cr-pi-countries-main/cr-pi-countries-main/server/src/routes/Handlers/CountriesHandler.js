const {allCountry} = require("../Controllers/getControllerCountry")

const getCountriesHandler = async(req, res)=> {
    try {
        const response = await allCountry()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getIdCountry = (req, res)=>{
    try {
        res.status(200).json("aqui el pais por id de tres letras ref. al pais")
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getByNameCountry = (req, res)=>{
    try {
        res.status(200).json("Muestra el pais por nombre, no importa sino es exacto.")
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {getCountriesHandler, getIdCountry, getByNameCountry};