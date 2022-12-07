const knex = require('knex') ({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'dome'
  }
})

module.exports = knex;