import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFilterBar, { extractTags,   filterCardsByTag,
  resetAllTags,
  toggleTagSelection } from './cardFilterBar.component';
import CardThumbnail from '../CardThumbnail/cardThumbnail.component'

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
    associatedTags: ['one', 'two']
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
    associatedTags: ['one', 'three']
  }
]

describe('CardFilterBar-HelperFunctions', () => {
  let tagTrackerState;
  beforeEach(() => {
    tagTrackerState = {
      one: false,
      two: false,
      three: false
    }
  });
  it('extractsTags', ()=> {
    expect(extractTags(data))
    .to.eql({
      one: false,
      two: false,
      three: false
    })
  })
  it('filterCardsByTag', ()=> {
    expect(filterCardsByTag(tagTrackerState,data))
    .to.eql({collectionCards: [{
      thumbnailTitle: {
        text: 'Example Card',
        altText: 'Example Card'
      },
      thumbnailPic: {
        source: 'test.jpg',
        altTitle: `Picture for Card Titled: Example Card`
      },
      associatedTags: ['one', 'two']
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
      associatedTags: ['one', 'three']
    }]})
  })

  const updateTrackerFn = (newState) => {
    tagTrackerState = newState
  }

  it('toggleTagSelection', ()=> {
    toggleTagSelection('one', tagTrackerState, updateTrackerFn)
    expect(
      tagTrackerState
      )
    .to.eql({
      one: true,
      two: false,
      three: false
    })
  })
  it('resetAllTags', ()=> {
    resetAllTags(tagTrackerState, updateTrackerFn)
    expect(
      tagTrackerState
      )
    .to.eql({
      one: false,
      two: false,
      three: false
    })
  })
})
