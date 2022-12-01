const breed = process.argv[2];

const request = require('request');

const URL = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;
request(URL, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    const data = JSON.parse(body);
    const breedname = data[0];

    if (!breedname) {
      console.log("Requested breed not found");
    } else {
      console.log(data[0].description);
    }
  }
  
});

