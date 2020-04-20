const bodyParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const yelp = require('../db/seeds/generation.js');

app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(morgan('dev'));


app.get('/api/getRecommendations', (req, res) => {
  yelp.search()
  .then(response => {
    console.log(response.jsonBody.businesses[0].name);
    res.status(200).send(response.jsonBody.businesses[0].name)
  }).catch(e => {
    // console.log(e);
    res.status(400).send(e);
  });
  // console.log(req.body);
  // res.status(200).send('Hello World!')
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));