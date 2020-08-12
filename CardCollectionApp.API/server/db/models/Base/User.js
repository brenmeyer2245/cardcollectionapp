const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('User', {
  userId : {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "Gary",

  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "Gygax",

  },
  userName: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "dndcreator",

  },
  userProfilePic: {
    type: Sequelize.STRING,
    allowNull: null,
    defaultValue: "userProfilePic.jpg",
  },
  email: {
    type: Sequelize.STRING,
    //valid email
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
});




