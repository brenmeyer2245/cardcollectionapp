#Document inspired Relational Database

The database structure for this app looks to capture some of the flexibility of a document database while maintain relationships between entities. It will use a SQL database with elements inspired by document db, meaning that entities will be defined and related in tradition SQL methodology, some entities will have a columns that will store chunks of JSON and use more of a NoSQL model.

##Core Entities
The three entities at the core of the app are
	*User
	*Card (A collection of information grouped together as an item)
	*Collection (A specific grouping of cards owned and managed by a User).
There are obvious and necessary relationships between the three entities however the content of the cards and the structure of collections should not be fixed into specific fields and columns. Content for cards and collections will be stored as JSON and will sync expectations for data and field values between the two entities.

##Templates
The secondary entities of this app are Templates, which provide a default JSON values for the columns in collections and cards that will use JSON storage.
There are 2 types of templates
	*Style Template (Informs the styling of a collection)
	*Content Template (informs a collection of the available card types it can hold and the expected properties for card content ).

Each Template will have related child templates. For example, StyleTemplate ‘LightMode’ will have a child template for Color Schemes that hold JSON with stored values for primary, secondary and accent colors.

On collection creation, a Template will be chosen and its child templates aggregated into one JSON value. That value will be stored in the created Collection table.
Now, the user can modify and read that Collections Template without any effect on the original Template tables.
When a Card is created from the Collection, the available templates for the Card will be pulled from the Collection and then stored on the Card as a default value.
Once again, after creation, the Card’s content is managed independently from the original source.
