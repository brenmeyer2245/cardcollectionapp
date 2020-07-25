import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollectionCards from './collectionCards.component';
import CardThumbnail from '../../Cards/CardThumbnail/cardThumbnail.component'

const adapter = new Adapter();
enzyme.configure({adapter});

const data = {
   collectionCards: [
    {
      thumbnailTitle: {
        text: 'Example Card 1',
        altText: 'Example Card 1'
      },
      thumbnailPic: {
        source: 'test1.jpg',
        altTitle: `ExampleCard Image 1`
      }
    },
    {
     thumbnailTitle: {
        text: 'Example Card 2',
        altText: 'Example Card 2'
      },
      thumbnailPic: {
        source: 'test2.jpg',
        altTitle: `ExampleCard Image 2`
      }
    }
  ]
}

describe('CollectionCards', () => {
  let collectionCards;

  beforeEach(() => {
    collectionCards = mount(<CollectionCards vm={data} />)
  })
  it('renders cards for the number of collectionCards passed in', () => {
    expect(
      collectionCards
        .contains(CardThumbnail)
      ).to.equal(true)
    expect(
      collectionCards
        .find(CardThumbnail)
      ).to.have.lengthOf(2)
  })
})
