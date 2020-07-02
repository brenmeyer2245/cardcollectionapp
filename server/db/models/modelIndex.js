  const Card = require('./Base/Card');
  const Collection = require('./Base/Collection');
  const User = require('./Base/Card');
  const ContentTemplate = require('./Templates/ContentTemplate');
  const ContentTemplateGroup = require('./Templates/ContentTemplateGroup');
  const StyleTemplate = require('./Templates/StyleTemplate');
  const StyleTemplateGroup = require('./Templates/StyleTemplateGroup');
  const CardRelationships = require('./Base/CardRelationships');
  const CardRelationshipTypes = require('./Base/CardRelationshipTypes');


  ContentTemplate.belongsTo(ContentTemplateGroup);
  StyleTemplate.belongsTo(StyleTemplateGroup);


  User.belongsToMany(Collection, {
    through: 'CollectionOwners',
    as: 'Owner',
    foreignKey: 'userId',
    otherKey: 'collectionId'
  });

  User.belongsToMany(Collection, {
    through: 'CollectionContributors',
    as: 'Contributor',
    foreignKey: 'userId',
    otherKey: 'collectionId'
  });

  Collection.hasMany(Card);

  Card.hasOne(User, {as: 'Creator'});


  CardRelationshipTypes.hasOne(CardRelationships, {as: "ConnectionType"});


  Card.belongsToMany(Card, {through: CardRelationships, as: 'SourceCard', foreignKey: 'RelatedCardId'})
