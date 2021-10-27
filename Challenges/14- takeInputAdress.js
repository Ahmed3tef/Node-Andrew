const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
  console.log('Enter a valid address');
} else {
  geocode(address, (error, data) => {
    // error and data بياخدهم تلقائي من جوا الدالة الاساسية
    if (error) {
      return console.log('Error: ', error);
    }

    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        return console.log('Error:', error);
      }
      console.log('Data:', data);
    });
  });
}
