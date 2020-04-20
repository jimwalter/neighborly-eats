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
  console.log(req.query.category);
  let cat = req.query.category.toLowerCase().replace(/['"]+/g, '');
  console.log(cat);
  yelp(req.query.zip, cat)
    .then(response => {
      var respo = response.jsonBody.businesses;
      // console.log(respo);
      res.status(200).send(respo)
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));