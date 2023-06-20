const { Router } = require("express");
const axios = require("axios");
const {getActivityHandler, postActivityHandler, deleteActivityHandler} = require ("./Handlers/ActivitiesHandler")

const router = Router();

router.get("/", getActivityHandler);

router.post("/", postActivityHandler);

router.delete("/:id", deleteActivityHandler);

module.exports = router;

