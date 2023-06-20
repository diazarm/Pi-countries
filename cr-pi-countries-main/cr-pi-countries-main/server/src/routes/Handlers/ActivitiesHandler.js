const {Activities, Countries} = require ("../../db");
const deleteActivityController = require("../Controllers/deleteActivityController")


const postActivityHandler = async(req, res) =>{
    const {
        name,
        difficulty,
        duration,
        season,
        countries} = req.body
    try {
        let activity = await Activities.create({  name, difficulty, duration, season })
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
      id:activity.id,
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season,
      countries: activity.Countries.map((country) => ({
        id: country.id,
        name: country.name,
      })),
    }));
  
    res.json(result);
  };
  

  const deleteActivityHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteActivity = await deleteActivityController(id);
      //if (!deleteActivity) throw new Error("Activity couldn't be deleted");
      res.status(201).json(deleteActivity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {getActivityHandler,postActivityHandler, deleteActivityHandler};