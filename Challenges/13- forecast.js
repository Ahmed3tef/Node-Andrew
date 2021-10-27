//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request');

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=71dd9ea2d474d2b96c16ff1f24c38280&query=${lat},${lng}`;

  request({ url: url, json: true }, (error, response) => {
    const current = response.body.current;

    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(
        undefined,

        current.weather_descriptions[0] +
          ' It is currently ' +
          current.temperature +
          ' degress out. There is a ' +
          current.feelslike +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
