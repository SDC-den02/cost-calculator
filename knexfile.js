require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://tinchonapa:test@localhost/cost_calculator',
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/postgres/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }  
};
