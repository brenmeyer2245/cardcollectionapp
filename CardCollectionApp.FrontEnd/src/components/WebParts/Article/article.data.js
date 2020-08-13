import {WebPartTypeConstants} from '../../../utilities/constants';

const ArticleData = {

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

export default ArticleData;
