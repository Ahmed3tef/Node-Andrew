// localhost:3000/help
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
  });
});

// help.hbs
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Help</title>
  </head>

  <body>
    <h1>{{ title }}</h1>
  </body>
</html>;
