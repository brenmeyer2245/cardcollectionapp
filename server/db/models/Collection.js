const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('Collection', {
  id : {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  collectionTitle: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "Cool Collection",

  },
  collectionThumbnail: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "collectionThumbnailNameHere.jpg",
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  collectionContentTemplate: {
    type: Sequelize.JSON,
  },
  styleContentTemplate: {
    type: Sequelize.JSON,
  },
  createDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  dateLastModified: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  viewLevel : {
    type: Sequelize.ENUM('private', 'public'),
    defaultValue: 'private'
  }

});




