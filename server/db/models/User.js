const Sequelize = require('sequelize');
const db = require('../db');


const User = db.define('User',{
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Gary'
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Gygax'
  },
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  dateLastModified: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})


User.findUserById = async (userId) => {
    return await User.findOne({
      where: {
        userId: userId
      }
    });
}

module.exports = User;
