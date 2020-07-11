const db = require('../../db');
const Sequelize = require('sequelize');


const styleTemplateGroup =  db.define('StyleTemplateGroup', {
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


module.exports = styleTemplateGroup
