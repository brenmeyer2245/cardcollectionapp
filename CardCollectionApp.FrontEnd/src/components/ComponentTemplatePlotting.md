# Component Templates
The content for a card should be dynamic and inpendently controlled
However, there needs to be some contract between the content stored on a card and the client
so that client knows what and how to render.

To accomplish this, component templates are offered to the user when adding new content
and default card templates have pre-defined component templates built in.
In short, a card is really a synthesis of components and components must follow a template.
The template type and its associated properties, when created, are stored in the content table with the other data.


## Types of Components
The User can choose from the following components; '
* ### Image Map:
      Contains a main image, labels and descriptions.
      Eventually, this should component should allow a user to CRUD markers to the image by click
      Clicks will track the (x,y) in relation to the image's constraints and store the marker info along with it.
* ### AttributeTable:
      Represents a list of list items related to a list of common header keys.
      Commonly used for tables.
* ### AttributeList:
      Represents a list of independent key/value pairs.

* ### Article
      Represents an article of text, with labels, links and included pictures

* ### TimeLine
      Represents a list of events
      Contains a set of event-date pairs. Also a text summary
      Events can be links to cards
      Need to handle ordering by date [ What if 2 dates are the same ]
      Need to handle ordering by user input

* ### Card Relations
      Represents a list of cards that are related to the current card under a specific category
      ** Example: For a character card, grouping could be character's friends
      Contains a list of Card BaseInfo and a link to each card

* ### BaseStatGroup
      Represents a group of key/value pairs specifically with integer values.
      These are defined and controlled independently.

* ### DependentStatGroup
      A group of key/value pairs specifically with expression values
      These are dependent on a BaseStatGroup and calculate values in relation to the BaseStatGroup Values
      Example: Saving Throws are calculated from a Character's Base Stats.
      So the BaseStats would have to be passed into the SavingThrows component in order to complete the calculation for Saving Throw Stats

* ### SingularItem
      Represents an independent ttem that offers one of each specified data type and labels for each
      Data Types: Multi-line Text, Header, Single-Line Text, Integer, Boolean

* ### MediaLibrary
      Represents a list of Media {Pictures, Video, Audio Files}
      Option to upload
      Option of Carousel vs Flex list
      ! This might be a section Type for more control

* ### Document Library
      Represents list of external Docs
      Option to Upload
      Option of Carousel vs Flex List
      ! Might be own section






## Note on Sections
  Sections should also follow templates to determine layout slightly
  Options of the number of items you can add to the sections and which ones

