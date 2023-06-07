const { Router } = require("express");
const axios = require("axios");
const {getByNameCountry, getCountriesHandler, getIdCountry} = require("./Handlers/CountriesHandler")
//const { Op, Country, Activity } = require("../db.js");

const router = Router();

router.get("/:idCountry", getIdCountry);

router.get("/name", getByNameCountry);

router.get("/", getCountriesHandler);


module.exports = router;
