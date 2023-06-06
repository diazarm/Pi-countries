const { Router } = require("express");

const router = Router();

const countries = require("./Countries");
const activities = require("./Activities");


router.use("/countries", countries);
router.use("/activities", activities);



module.exports = router;
