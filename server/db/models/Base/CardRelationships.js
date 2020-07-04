const db = require('../../db');
const Sequelize = require('sequelize');

module.exports = db.define('CardRelationships', {
  description: {
    type: Sequelize.TEXT
  }
})
