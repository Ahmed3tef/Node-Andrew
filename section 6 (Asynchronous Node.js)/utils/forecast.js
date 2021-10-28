const request = require('request');

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=71dd9ea2d474d2b96c16ff1f24c38280&query=${lat},${lng}`;

  request({ url, json: true }, (error, { body }) => {
    const current = body.current;

    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(
        undefined,

        current.weather_descriptions[0] +
          '. It is currently ' +
          current.temperature +
          ' degress out. There is a ' +
          current.feelslike +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
