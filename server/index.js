var bodyParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;



app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(morgan('dev'));

app.get('/getRecommendations', (req, res) => {
  console.log(req.body);
  res.status(200).send('Hello World!')
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));