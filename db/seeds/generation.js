
'use strict';
require('dotenv').config();
const yelp = require('yelp-fusion');
const categories = require('../../shared/categories.js');

const client = yelp.client(process.env.YELP_KEY);

const search = (zip, category, limit = 3) => (client.search({
  categories: category,
  sort_by: 'rating',
  location: zip,
  limit,
}));

const searchOne = (zip, category) => search(zip, category, 1);

module.exports = {
  client,
  search,
  searchOne,
  categories,
};
