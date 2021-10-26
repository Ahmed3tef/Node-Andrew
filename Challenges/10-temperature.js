const request = require('request');

const URL = `http://api.weatherstack.com/current?access_key=71dd9ea2d474d2b96c16ff1f24c38280&query=37.8267,-122.4233`;

request({ url: URL, json: true }, (error, response) => {
  const data = response.body.current;
  const { temperature, feelslike } = data;
  console.log(
    `it is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`
  );
});

// prints
// it is currently 14 degrees out. It feels like 13 degrees out.
