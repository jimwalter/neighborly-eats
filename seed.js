
const { connection } = require('./db/index.js');
const { search, categories } = require('./db/seeds/generation.js');

const zip = 80211;

const getRecsandPopulateDB = async function () {
  let inserts = [];

  for (var i = 0; i < 4; i++) {
    await search(zip, categories[i].name)
      .then( respo => {
        var businesses = respo.jsonBody.businesses;
        businesses.forEach( business => {
          console.log(business);
          const queryString = `INSERT INTO recommendations (rest_id, alias, name, image_url, yelp_url, rating, price, display_phone) VALUES ('${business.id}', '${business.alias}', '${business.name}', '${business.image_url}', '${business.url}', '${business.rating}', '${business.price || '$'}', '${business.display_phone}')`;
          // inserts.push(queryString);
          connection.query(queryString, (err, results, fields) => {
            if (err) {
              console.log('++++++++ ERROR ++++++++', err);
            }
          });
        })
      })
      .catch( err => console.log(err));
  }
};

getRecsandPopulateDB();