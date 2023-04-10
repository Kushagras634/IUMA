const cities = require('../db/indian_cities')

exports.citySearch = (req, res) => {
  const query = req.body.city;
// console.log(query)
  if (!query) {
    return res.status(200).json({ error: "Missing search query" });
  }

  const filteredCities = cities.filter(city => {
    // Filter cities based on starting letter of city name
    return city.toLowerCase().startsWith(query.toLowerCase());
  });
//   console.log(results, 'cities res')
  res.json(filteredCities);
};
