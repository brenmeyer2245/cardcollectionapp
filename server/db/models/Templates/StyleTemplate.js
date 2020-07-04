const db = require('../../db');
const Sequelize = require('sequelize');


const styleTemplate =  db.define('StyleTemplate', {
  templateId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  templateType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  templateContent: {
    //using JSONB because it's optimized for retrieval
    type: Sequelize.JSONB
  }
});


module.exports = styleTemplate
