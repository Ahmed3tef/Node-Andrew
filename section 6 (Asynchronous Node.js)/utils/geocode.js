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
