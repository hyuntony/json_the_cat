const request = require('request');
const myArgs = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${myArgs[0]}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Error: Requested breed is not found!");
    return;
  }
  console.log(data[0].description);
});