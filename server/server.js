const express = require('express');
const path = require('path');
const cors = require('cors');

const fetchMongoData = require('./mongo.js');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public', 'dist');

app.use(cors());

app.get('/getusers', fetchMongoData, (req, res) => {
  res.json(res.locals.data);
});

app.get('/login/:username', fetchMongoData, (req, res) => {
  if (res.locals.error) {
    res.status(res.locals.error.statusCode).send(res.locals.error.message);
  } else {
    res.json(res.locals.data);
  }
});

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`server running on port ${port}`));
