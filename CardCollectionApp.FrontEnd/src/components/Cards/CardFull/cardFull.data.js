import {WebPartTypeConstants} from '../../../utilities/constants';

const CardFullData = {
  cardSections: [
    {

      webPartType: WebPartTypeConstants.ARTICLE,
      title: 'article title',
      contentText: [
          'This is the first section'
      ],
      contentImages: [{
        label: 'An image supplementing the text',
        src: 'https://www.w3schools.com/tags/pic_trulli.jpg',

      }]
    }
    ,{
      webPartType: WebPartTypeConstants.ATTRIBUTE_LIST,
      title: 'Attribute List Title',
      attributes : [
        {
          key: 'Role',
          value: 'Developer'
          },
        {
          key: 'Name',
          value: 'Brendan'
        }
      ]
    }
    ,{
      webPartType: WebPartTypeConstants.ATTRIBUTE_TABLE,

      title: 'Attribute List Title',
      attributeKeys: [1,2,3,4,5],
      attributeValueRows: [
        ['a','b','c','d','e'],
      ],
      editMode: true,
      handleChange:(evt)=> console.log(evt.target.value)
    }
    ,{
      webPartType: WebPartTypeConstants.SINGULAR_ITEM,
      header: {
        label: 'Header Label',
        value: 'Header Value'
      }
      /**
       * Boolean reflecting whether or not
       * the page is in edit mode
       * this will be controlled at the
       * Card component level
       */
      , editMode: true

      ,multiLineText: {
        label: 'MultiLine Text',
        value: 'Value for MultiLine'
      }
      ,singleLineText: {
        label: 'SingleLine Text',
        value: 'Value for SingleLine'
      }
      ,number: {
        label: 'Number ',
        value: 1
      }
      ,boolean: {
        label: 'Boolean Text',
        value: true
      }
      ,date: {
        label: 'Date Text',
        value: '2020-01-01'
      }
      ,handleChange: (evt) => {
        console.dir(evt.target.value)
      }
    }
    ,{
      webPartType: WebPartTypeConstants.MAP_IMAGE,
      markable: true,
      title: 'Image Map Title',
      imageSrc: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
      existingMarkers: {},
      altTitle: 'Alt Title for Image Map'
    }
  ]
}

export default CardFullData
