const db = require('../../db');
const Sequelize = require('sequelize');


const contentTemplateGroup =  db.define('ContentTemplateGroup', {
  templateGroupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  templateTitle: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = contentTemplateGroup
