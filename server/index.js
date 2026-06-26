const bodyParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const yelp = require('../db/seeds/generation.js');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/api/getRecommendations', (req, res) => {
  let cat = req.query.category.toLowerCase().replace(/['"]+/g, '');
  yelp.search(req.query.zip, cat)
    .then(response => {
      var respo = response.jsonBody.businesses;
      res.status(200).send(respo)
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get('/api/getRandom', (req, res) => {

  let categories = yelp.categories;
  let randCatInd = Math.floor(Math.random() * categories.length);

  let randCat = categories[randCatInd].name.toLowerCase().replace(/['"]+/g, '');

  yelp.searchOne(req.query.zip, randCat)
    .then(response => {
      var respo = response.jsonBody.businesses;
      res.status(200).send(respo)
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));