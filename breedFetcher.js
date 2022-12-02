
const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      callback(`Error: ${error}`, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Error: ${error}`, null);
    }
  });
};

module.exports = {fetchBreedDescription};
