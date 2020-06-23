const db = require('../db');
const Sequelize = require('sequelize');


const Card = db.define('Card', {
  cardId : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cardTitle: {
    type: Sequelize.STRING,
    allNull: false,
    defaultValue: 'Cool Card!'
  },
  cardThumbnail: {
    type: Sequelize.STRING,
  },
  cardType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content:{
    type: Sequelize.JSON
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.Now
  },
  dateLastModified: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.Now
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});




module.exports = Card;
