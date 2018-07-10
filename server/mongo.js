const mongoose = require('mongoose');

const uri = 'mongodb://scrum:scrum1@ds229701.mlab.com:29701/scrum';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isLoggedIn: { type: Boolean, default: true },
  boards: Object,
  oauthInfo: Object,
});

const SimpleUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  isLoggedIn: Boolean,
});
const SimpleUser = mongoose.model('SimpleUser', SimpleUserSchema);
const User = mongoose.model('User', UserSchema);
const fetchMongoData = function(request, response, next) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('connected to mongoose');
      if (request.params.username) {
        const userQuery = { name: request.params.username };
        User.find(userQuery, (err, res) => {
          response.locals.data = res;
          next();
        }).catch(e => console.log('mongo find error: ', e));
      } else {
        User.find({}, (err, res) => {
          if (err) response.locals.error = err;
          response.locals.data = res;
          next();
        });
      }
    })
    .catch(e => {
      response.locals.error = {
        error: { message: 'mongoose connection error', e },
        statusCode: 503,
      };
      next();
    });
};

module.exports = { SimpleUser, User, fetchMongoData };
