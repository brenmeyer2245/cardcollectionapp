
 const User = require('./User');
 const Card = require('./Card');

User.hasMany(Card)
Card.belongsToMany(Card, {
                          as: 'relatedCard',
                          through:'card_relationships',
                          foreignKey: 'cardId'
                        });


 module.exports = {
   User, Card
 }
