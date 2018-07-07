// data template for future use elephantsql inputs for pgadmin
// postgres://eimuxmhn:5bdWmJrsxYJmiunioCBI3MLY4KTh0BxI@pellefant.db.elephantsql.com:5432/eimuxmhn
// name: your choice
// host: pellefant.db.elephantsql.com
// port: 5432
// maintenance db: eimuxmhn
// username: eimuxmhn
// password: 5bdWmJrsxYJmiunioCBI3MLY4KTh0BxI

// create table users (
// _id serial primary key,
// is_logged_in boolean,
// username varchar
// );

// insert into users (is_logged_in, username) values (false, 'brendanmorrell');

const { Client } = require('pg');
const uri =
  'postgres://eimuxmhn:5bdWmJrsxYJmiunioCBI3MLY4KTh0BxI@pellefant.db.elephantsql.com:5432/eimuxmhn';

const client = new Client({ connectionString: uri });
client.connect();

const getQuery = new Promise((resolve, reject) => {
  return client.query('SELECT * FROM users', (err, res) => {
    resolve(res);
  });
});

module.exports = function(request, response, next) {
  getQuery.then(data => {
    console.log('***************************');
    console.log('SQL rows: ', data.rows);
    console.log('***************************');
    console.log(`SQL Command: ${data.command}`);
    console.log('***************************');
    response.locals.data = data;
    next();
  });
};
