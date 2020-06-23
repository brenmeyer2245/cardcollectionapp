const Sequelize = require('sequelize');

const config = require('../../package.json');
const dbName = config.name += (process.env.NODE_ENV === "test" ? "-test" : "");

//instantiate the DB with Sequelize, logging set to false
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false
  }
)

if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}


module.exports = db;
