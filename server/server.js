const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');
const { User, fetchMongoData } = require('./mongo.js');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public', 'dist');

app.use(cors());

app.get('/getusers', fetchMongoData, (req, res) => {
  res.json(res.locals.data);
});

const github = {
  clientID: '8f7d91a63f56cb8593fd',
  clientSecret: '77d2df9309e5220194b998253edf4183a983ab72',
  redirectURI: 'http://localhost:3000/git',
  postCodeURL: function() {
    return `https://github.com/login/oauth/access_token?client_id=${this.clientID}&client_secret=${
      this.clientSecret
    }&code=`;
  },
  authGetUrl: function() {
    return `https://api.github.com/user?`;
  },
};

app.use(express.static(publicPath));

app.get('/git', (req, res, next) => {
  const url = github.postCodeURL() + req.query.code;
  request.post(url, (err, gitRes, accessToken) => {
    const url = github.authGetUrl() + accessToken;
    const options = {
      url,
      headers: {
        'User-Agent': 'request',
      },
    };
    request.get(options, (err, gitRes, body) => {
      const userData = JSON.parse(body);
      User.find({ 'oauthInfo.github.id': userData.id }, (err, mongoRes) => {
        if (mongoRes.length) {
          console.log(`user ${userData.name || userData.id} exists in database`);
        } else {
          const newUser = {
            name: userData.name || userData.login || userData.id,
            isLoggedIn: true,
            boards: JSON.stringify({}),
            oauthInfo: JSON.stringify({
              github: userData,
            }),
          };
          User.create(newUser, (err, mongoRes) => {
            console.log(`new user created: ${newUser.name}`);
          });
        }
      });
    });
  });
  next('route');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`server running on port ${port}`));
