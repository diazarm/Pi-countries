const {Activities, Countries} = require ("../../db");


const postActivityHandler = async(req, res) =>{
    const {name,
        difficulty,
        duration,
        season,
        countries} = req.body
    try {
        let activity = await Activities.create({ name, difficulty, duration, season })
        await activity.setCountries(countries.toUpperCase())
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





const getActivityHandler = async (req, res) => {
    const allActivities = await Activities.findAll({ include: Countries });
  
    const result = allActivities.map((activity) => ({
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season,
      countries: activity.Countries.map((country) => ({
        id: country.id,
        name: country.name,
        // Agrega aquí otras propiedades de los países que desees incluir
      })),
    }));
  
    res.json(result);
  };
  

module.exports = {getActivityHandler,postActivityHandler};