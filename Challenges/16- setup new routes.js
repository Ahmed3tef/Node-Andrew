const express = require('express');
const app = express();

// app.com
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// app.com/help
app.get('/', (req, res) => {
  res.send('Help page');
});

// app.com/about
app.get('/', (req, res) => {
  res.send('about page');
});

// app.com/weather
app.get('/', (req, res) => {
  res.send('weather page');
});

app.listen(3000, () => {
  console.log('server listening');
});
