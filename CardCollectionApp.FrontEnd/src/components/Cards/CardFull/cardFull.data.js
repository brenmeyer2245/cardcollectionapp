import {WebPartTypeConstants} from '../../../utilities/constants';

const CardFullData = {
  cardTitle: "Card Title",
  cardSections: [
    {
      webPartType: WebPartTypeConstants.ARTICLE,
      title: 'article title',
      contentText: [
        "AND I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth"
        ,"the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        ,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat fermentum rhoncus. Suspendisse eleifend ante in fermentum vestibulum. Phasellus sollicitudin pulvinar blandit. Nulla pharetra, arcu at tincidunt iaculis, justo turpis pulvinar ligula, quis aliquam elit tellus eu ipsum. Nullam ultricies nisl eu ex egestas, id dictum lectus condimentum. Morbi porta ut nulla ac scelerisque. Vestibulum vel odio est. Aenean viverra ipsum a neque efficitur, et convallis dui euismod. Nullam accumsan tincidunt metus sed accumsan. Nunc eget nibh posuere, congue lectus nec, varius lacus. Suspendisse tempor turpis sit amet nulla gravida, in rhoncus ante elementum. Donec pretium ac urna non tincidunt. Vestibulum porta ligula vel justo pretium vehicula. Pellentesque at convallis sem."
        ,"Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut sodales diam, sed blandit metus. Phasellus id metus sagittis, pharetra nisl sed, tincidunt est. Vivamus in rhoncus tortor. Donec volutpat velit non convallis bibendum. Suspendisse eu tristique ex. Vestibulum condimentum convallis porttitor. Vestibulum porttitor, augue in posuere facilisis, dolor libero pulvinar est, a dictum purus lectus non odio. Pellentesque massa dui, vulputate in orci ut, cursus mattis massa. Suspendisse id venenatis lectus. Nulla venenatis ut tellus id molestie."
      ],
      contentImages: [
        {
          label: 'An image supplementing the text',
          src: 'https://www.w3schools.com/tags/pic_trulli.jpg',
        }
        ,{
          label: 'dave 1',
          src: 'data:image/jpeg;base64,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'
        }
        ,{
          label: 'dave 2',
          src: 'data:image/jpeg;base64,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',
        }
      ]
    }
    ,{
      webPartType: WebPartTypeConstants.ATTRIBUTE_LIST,
      title: 'Attribute List Title',
      attributes : [
        {
          key: 'Role',
          value: 'Developer',
          valueDataType: "text"
          },
        {
          key: 'Name',
          value: 'Brendan',
          valueDataType: "text"
        }
      ]
    }
   
  ]
}

export default CardFullData

const phaseTwoWebparts = [
      {
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
      webPartType: WebPartTypeConstants.MAP_IMAGE,
      markable: true,
      title: 'Image Map Title',
      imageSrc: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
      existingMarkers: {},
      altTitle: 'Alt Title for Image Map'
    } ,{
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
]