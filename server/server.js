const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');
const boardController = require('./controllers/boardController');
const storyController = require('./controllers/storyController');

const cookieParser = require('cookie-parser');

const { SimpleUser, User, fetchMongoData } = require('./mongo.js');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public', 'dist');

app.use(cors());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getusers', fetchMongoData, (req, res) => {
  SimpleUser.find({}, (err, resMongo) => {
    res.json(resMongo);
  });
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

app.get('/git', (req, res) => {
  console.log('here');

  res.send('heyo');
});

app.use(express.static(publicPath));
app.post('/signup', (req, res) => {
  SimpleUser.find({ name: req.body.username }, (err, resMongo) => {
    if (resMongo.length) {
      res.send({ error: 'user exists' });
    } else {
      SimpleUser.create(
        { name: req.body.username, password: req.body.password, isLoggedIn: true },
        (err, resMongo) => {
          res.send(resMongo);
        }
      );
    }
  });
});

app.post('/logout', (req, res) => {
  SimpleUser.findOneAndUpdate({ _id: req.body._id }, { isLoggedIn: false }, (err, resMongo) => {
    res.send('logged-out');
  });
});

app.post('/login', (req, res) => {
  SimpleUser.find({ name: req.body.username, password: req.body.password }, (err, resMongo) => {
    if (resMongo.length) {
      const userData = resMongo[0];
      SimpleUser.update(
        { name: req.body.username, password: req.body.password },
        { isLoggedIn: true },
        (err, resMongo) => {
          console.log(resMongo);
          res.send(userData);
        }
      );
    } else {
      res.send({ error: 'username or password incorrect' });
    }
  });
});

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
            res.sendFile(path.join(publicPath, 'index.html'));
          });
        }
      });
    });
  });
});

/// TASK ROUTES
app.get('/tasks/id?:id', taskController.getTasks);
app.post('/tasks', taskController.addTask);
app.post('/updatetasks', taskController.updateTask);
app.delete('/tasks', taskController.deleteTask);

app.get('/alltasks', taskController.getAllTasks);

/// STORY ROUTES
app.get('/stories/id?:id', storyController.getStories);
app.post('/stories', storyController.addStory);
app.post('/updatestories', storyController.updateStory);
app.delete('/stories', storyController.deleteStory);

app.get('/allstories', storyController.getAllStories);

//BOARD ROUTES
app.get('/boards/id?:id', boardController.getBoards);
app.post('/boards', boardController.addBoard);
app.delete('/boards', boardController.deleteBoard);

app.get('/allboards', boardController.getAllBoards);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`server running on port ${port}`));
