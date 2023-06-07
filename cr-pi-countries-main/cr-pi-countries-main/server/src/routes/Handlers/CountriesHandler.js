const {allCountry, countryById} = require("../Controllers/getControllerCountry")

const getCountriesHandler = async(req, res)=> {
    console.log('por aqui no');
    try {
        const response = await allCountry()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getIdCountry = async(req, res)=>{
    const {idCountry} = req.params;
    let idCountryi = idCountry.toUpperCase();
        try {
            const response = await countryById(idCountryi)
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    
}

const getByNameCountry = async(req, res)=>{
    const {name} = req.query;
    console.log('este es el '+ name);
    if (name){
        try {
            const Countrys = await allCountry();
            const Country = Countrys.filter((ele)=>
            ele.name.toLowerCase().includes(name.toLowerCase())
            );
            if (Country.length){
                res.status(200).json(Country)
            }else {"Country Not found..."}
            
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
    
}

module.exports = {getCountriesHandler, getIdCountry, getByNameCountry};