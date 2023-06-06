const { Router } = require("express");
const axios = require("axios");
const {getActivityHandler, postActivityHandler} = require ("./Handlers/ActivitiesHandler")

const router = Router();

router.get("/", getActivityHandler);

router.post("/", postActivityHandler);


module.exports = router;

