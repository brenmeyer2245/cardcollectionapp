import {WebPartTypeConstants} from '../../../utilities/constants';

const SingularItemData = {
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



export default SingularItemData;
