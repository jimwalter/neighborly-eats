const bodyParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const yelp = require('../db/seeds/generation.js');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/api/getRecommendations', (req, res) => {
  console.log(req.query.category);
  let cat = req.query.category.toLowerCase().replace(/['"]+/g, '');
  console.log(cat);
  yelp.search(req.query.zip, cat)
    .then(response => {
      var respo = response.jsonBody.businesses;
      // console.log(respo);
      res.status(200).send(respo)
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get('/api/getRandom', (req, res) => {

  let categories = [{name: 'American (New)', num: 0}, {name: 'American (Traditional)', num: 1}, {name: 'Asian Fusion', num: 2}, {name: 'Barbeque', num: 3}, {name: 'Breakfast & Brunch', num: 4}, {name: 'Buffets', num: 5}, {name: 'Burgers', num: 6}, {name: 'Cafes', num: 7}, {name: 'Cajun/Creole', num: 8}, {name: 'Caribbean', num: 9}, {name: 'Cheesesteaks', num: 10}, {name: 'Chicken Wings', num: 11}, {name: 'Chinese', num: 12}, {name: 'Dim Sum', num: 13}, {name: 'Comfort Food', num: 14}, {name: 'Delis', num: 15}, {name: 'Diners', num: 16}, {name: 'Fast Food', num: 17}, {name: 'Fondue', num: 18}, {name: 'Gastropubs', num: 19}, {name: 'Gluten-Free', num: 20}, {name: 'Greek', num: 21}, {name: 'Hot Dogs', num: 22}, {name: 'Indian', num: 23}, {name: 'Italian', num: 24}, {name: 'Ramen', num: 25}, {name: 'Kebab', num: 26}, {name: 'Korean', num: 27}, {name: 'Kosher', num: 28}, {name: 'Mediterranean', num: 29}, {name: 'Mexican', num: 30}, {name: 'Tacos', num: 31}, {name: 'Noodles', num: 32}, {name: 'Pan Asia', num: 33}, {name: 'Pizza', num: 34}, {name: 'Salad', num: 35}, {name: 'Sandwiches', num: 36}, {name: 'Seafood', num: 37}, {name: 'Soul Food', num: 38}, {name: 'Soup', num: 39}, {name: 'Southern', num: 40}, {name: 'Steakhouses', num: 41}, {name: 'Sushi Bars', num: 42}, {name: 'Tapas/Small Plates', num: 43}, {name: 'Thai', num: 44}, {name: 'Turkish', num: 45}, {name: 'Vegan', num: 46}, {name: 'Vegetarian', num: 47}, {name: 'Vietnamese', num: 48}];
  let randCatInd = Math.floor(Math.random() * categories.length);

  let randCat = categories[randCatInd].name.toLowerCase().replace(/['"]+/g, '');

  yelp.searchOne(req.query.zip, randCat)
    .then(response => {
      var respo = response.jsonBody.businesses;
      console.log(respo);
      res.status(200).send(respo)
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));