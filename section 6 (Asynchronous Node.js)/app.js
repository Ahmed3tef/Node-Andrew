const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
