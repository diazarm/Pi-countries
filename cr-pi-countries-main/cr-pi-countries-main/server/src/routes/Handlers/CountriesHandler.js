const {allCountry, countryById} = require("../Controllers/getControllerCountry")

const getCountriesHandler = async(req, res)=> {
    const {name} = req.query;
    console.log('el query es: '+ name);
    const Countrys = await allCountry();
    if (name){ 
            const Country = Countrys.filter((ele)=>
            ele.name.toLowerCase().includes(name.toLowerCase()));
            if(Country.length > 0){
                res.status(200).json(Country)} else {
                res.status(400).json("Country not found..")}
            }else {
                res.status(200).json(Countrys)
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




module.exports = {getCountriesHandler, getIdCountry };