const express = require('express');
const app = express();

// app.com
app.get('/', (req, res) => {
  res.send('<h1>Hello from the server!</h1>');
});

// app.com/help
app.get('/help', (req, res) => {
  res.send([
    {
      name: 'name1',
    },
    { name: 'name2' },
  ]);
});

// app.com/about
app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// app.com/weather
app.get('/weather', (req, res) => {
  res.send({
    location: {
      latitude: '30',
      longitude: '30',
    },
    forecast: 'data',
  });
});

app.listen(3000, () => {
  console.log('server listening');
});
