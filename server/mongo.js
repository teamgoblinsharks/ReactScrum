const mongoose = require('mongoose');

const uri = 'mongodb://scrum:scrum1@ds229701.mlab.com:29701/scrum';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const userModel = mongoose.model('User', UserSchema);

module.exports = function(request, response, next) {
  mongoose
    .connect(uri)
    .then(() => console.log('connected to mongoose'))
    .catch(e => {
      response.locals.error = {
        error: { message: 'mongoose connection error', e },
        statusCode: 503,
      };
      next();
    });

  // if (request.path === '/add_user') {
  //   if (request.query.name && request.query.name.trim()) {
  //     const user = { name: request.query.name.trim() };
  //     userModel.create(user, (err, res) => {
  //       if (err) {
  //         response.locals.error = { message: err, statusCode: 400 };
  //       } else {
  //         response.locals.data = res;
  //       }
  //       next();
  //     });
  //   }
  // } else {
  //   response.locals.error = {
  //     error: 'Error 400. Unable to add user without name parameter. request not processed',
  //     statusCode: 400,
  //   };
  //   next();
  // }

  if (request.params.username) {
    console.log(request.params.username);

    const userQuery = { name: request.params.username };
    userModel
      .find(userQuery, (err, res) => {
        response.locals.data = res;
        next();
      })
      .catch(e => console.log('mongo find error: ', e));
  }
};
