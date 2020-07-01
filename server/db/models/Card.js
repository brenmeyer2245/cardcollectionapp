const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('Card', {
  id : {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  cardTitle: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "Cool Card",

  },
  cardThumbnail: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "thumbnailNameHere.jpg",
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  content: {
    type: Sequelize.JSON,
  },
  createDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  dateLastModified: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  }
});




