const { Countries, Activities } = require("../../db");
const { Op } = require("sequelize");

const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const find = await Activities.findAll({
    where: { name: { [Op.iLike]: name } }});
  
  if (!find.length) {
  const postActivity = await Activities.create({
    name,
    difficulty,
    duration,
    season,
  });

  const countriesData = await Countries.findAll({
    where: {
      name: countries,
    },
  });

  const countryIds = countriesData.map((country) => country.id);
  await postActivity.addCountries(countryIds);

  return postActivity;
  }
};

module.exports = postActivityController;