
'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('FmcTIWQe9mkAgUYOb5TzvE4rzlmNOl3v4qc3tPfmj-HZgCrb_1F0EV2q42WkmpUXn1V1DG3geGtm_cVvnT-5NUFj_wXIletgCLD_va8yxUtfehbizDfrNo_UH1eaXnYx');


var search = () => (client.search({
  categories: 'burgers',
  sort_by: 'rating',
  location: '80211',
  limit: 4,
  })
);

var categories = [{name: 'American (New)', num: 0}, {name: 'American (Traditional)', num: 1}, {name: 'Asian Fusion', num: 2}, {name: 'Barbeque', num: 3}, {name: 'Breakfast & Brunch', num: 4}, {name: 'Buffets', num: 5}, {name: 'Burgers', num: 6}, {name: 'Cafes', num: 7}, {name: 'Cajun/Creole', num: 8}, {name: 'Caribbean', num: 9}, {name: 'Cheesesteaks', num: 10}, {name: 'Chicken Wings', num: 11}, {name: 'Chinese', num: 12}, {name: 'Dim Sum', num: 13}, {name: 'Comfort Food', num: 14}, {name: 'Delis', num: 15}, {name: 'Diners', num: 16}, {name: 'Fast Food', num: 17}, {name: 'Fondue', num: 18}, {name: 'Gastropubs', num: 19}, {name: 'Gluten-Free', num: 20}, {name: 'Greek', num: 21}, {name: 'Hot Dogs', num: 22}, {name: 'Indian', num: 23}, {name: 'Italian', num: 24}, {name: 'Ramen', num: 25}, {name: 'Kebab', num: 26}, {name: 'Korean', num: 27}, {name: 'Kosher', num: 28}, {name: 'Mediterranean', num: 29}, {name: 'Mexican', num: 30}, {name: 'Tacos', num: 31}, {name: 'Noodles', num: 32}, {name: 'Pan Asia', num: 33}, {name: 'Pizza', num: 34}, {name: 'Salad', num: 35}, {name: 'Sandwiches', num: 36}, {name: 'Seafood', num: 37}, {name: 'Soul Food', num: 38}, {name: 'Soup', num: 39}, {name: 'Southern', num: 40}, {name: 'Steakhouses', num: 41}, {name: 'Sushi Bars', num: 42}, {name: 'Tapas/Small Plates', num: 43}, {name: 'Thai', num: 44}, {name: 'Turkish', num: 45}, {name: 'Vegan', num: 46}, {name: 'Vegetarian', num: 47}, {name: 'Vietnamese', num: 48}];

module.exports = search