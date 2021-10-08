import {expect} from 'chai'; 
import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Collection from './collection.component'; 
import CollectionData from './Collection.data';
import CardThumbnail from '../../Cards/CardThumbnail/cardThumbnail.component';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('Collection Page', () => {
    let collection;
  
    beforeEach(() => {
        collection = mount(<Collection vm={CollectionData} />)
    })
    it('renders the collection title', () => {
        expect(
            collection
              .find('.Collection-title')
              .at(0)
              .text()
            ).to.equal(CollectionData.collectionTitle)
    })
    it('renders the number of cards in the collection', () => {
        expect(collection.contains(CardThumbnail)).to.equal(true)
        expect(
            collection
              .find(CardThumbnail)
            ).to.have.lengthOf(CollectionData.collectionCards.length)
    })
})