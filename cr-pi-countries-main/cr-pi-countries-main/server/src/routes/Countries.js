const { Router } = require("express");
const axios = require("axios");
const {getCountriesHandler, getIdCountry} = require("./Handlers/CountriesHandler")


const router = Router();

router.get("/:idCountry", getIdCountry);

router.get("/", getCountriesHandler);



module.exports = router;
