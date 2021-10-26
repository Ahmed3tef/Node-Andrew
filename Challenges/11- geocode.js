const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWhtZWQzYXRlZiIsImEiOiJja3Y2bGE3MmQxdmZlMnZvdjNnYW9hODRtIn0.3rN2kldncdyiHIGDSNv16g`;

request({ url: geocodeURL, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0];
  const latitude = response.body.features[0].center[1];
  console.log(latitude, longitude);
});

// logs this: 34.0544 -118.2439
