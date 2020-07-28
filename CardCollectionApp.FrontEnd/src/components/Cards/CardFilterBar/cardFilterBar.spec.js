import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFilterBar from './cardFilterBar.component';

const adapter = new Adapter();
enzyme.configure({adapter});


const data =
  [{
    thumbnailTitle: {
      text: 'Example Card',
      altText: 'Example Card'
    },
    thumbnailPic: {
      source: 'test.jpg',
      altTitle: `Picture for Card Titled: Example Card`
    },
    associatedTag: ['one', 'two']
  },
  {
    thumbnailTitle: {
      text: 'Example Card',
      altText: 'Example Card'
    },
    thumbnailPic: {
      source: 'test.jpg',
      altTitle: `Picture for Card Titled: Example Card`
    },
    associatedTag: ['one', 'three']
  }
]


describe('CardFilterBar', () => {
  let cardFilterBar;

  beforeEach(() => {
    cardFilterBar = shallow(<CardFilterBar vm={data} />)
  });
})
