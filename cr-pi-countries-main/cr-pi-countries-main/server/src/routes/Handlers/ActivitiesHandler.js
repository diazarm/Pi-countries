const {Activities, Countries} = require ("../../db");


const postActivityHandler = async(req, res) =>{
    const {name,
        difficulty,
        duration,
        season,
        countries} = req.body
    try {
        let activity = await Activities.create({ name, difficulty, duration, season })
        await activity.setCountries(countries)
        let activityWithCountry = await Activities.findOne({
            where: { name: name },
            include: {
                model: Countries,
                through: {
                    attributes: []
                }
            }
        })
        res.json(activityWithCountry)
    } catch (error) {
       res.status(400).json({error:error.message}) 
    }
}





const getActivityHandler = (req, res) =>{
    console.log("obtiene una actividad");
}


module.exports = {getActivityHandler,postActivityHandler};