// app.js

const address = process.argv[2];
geocode(address, (error, { latitude, longitude, location } = {}) => {
  // error and data بياخدهم تلقائي من جوا الدالة الاساسية
  if (error) {
    return console.log('Error: ', error);
  }

  forecast(latitude, longitude, (error, data) => {
    if (error) {
      return console.log('Error:', error);
    }
    console.log('Data:', data);
    console.log(location);
  });
});

// geocode.js

const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYWhtZWQzYXRlZiIsImEiOiJja3Y2bGE3MmQxdmZlMnZvdjNnYW9hODRtIn0.3rN2kldncdyiHIGDSNv16g`;

  request({ url, json: true }, (error, { body }) => {
    const features = body.features[0];

    if (error) {
      callback(`Unable to connect to location services!`, undefined);
    } else if (features.length === 0) {
      callback(`Unable to find location. Try another search!`, undefined);
    } else {
      callback(undefined, {
        latitude: features.center[1],
        longitude: features.center[0],
        location: features.place_name,
      });
    }
  });
};

module.exports = geocode;

// forecast.js

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
