import {WebPartTypeConstants} from '../../../utilities/constants';

const AttributeListData = {
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
    },
    {
      key: 'True',
      value: true,
      valueDataType: "boolean"
    },
    {
      key: 'False',
      value: false,
      valueDataType: "boolean"
    },
    {
      key: 'Img',
      value: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
      valueDataType: "img"
    }
  ]
}

export default AttributeListData;
