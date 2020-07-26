import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow, act} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollectionList from './collectionList.component';

const adapter = new Adapter();
enzyme.configure({adapter});

const data = {
  collectionChoices:[{
    id : 1,
    collectionTitle:  "Cool Collection 1",
    collectionThumbnail: "test1.jpg",
  },
  {
    id : 2,
    collectionTitle:  "Neat Collection 2",
    collectionThumbnail: "test2.jpg",
  },
  {
    id : 3,
    collectionTitle:  "Sly Collection 3",
    collectionThumbnail: "test3.jpg",
  }]
}

describe('CollectionList', () => {
  let collectionList;

  beforeEach(() => {
    collectionList = shallow(<CollectionList vm={data} />)
  })
  it('renders choice thumbnails for each provided data point', () => {
    expect(collectionList
      .find('.CardThumbnail-medium')
      ).to.have.lengthOf(3)
    expect(collectionList
      .find('.CardThumbnail-medium')
      .at(0)
      .text()
      ).to.equal('Cool Collection 1');
    const secondElement = collectionList
                          .find('.CardThumbnail-medium')
                          .at(1)
                          .props();
    expect(secondElement.href)
    .to.equal("#");
    expect(secondElement['alt-text'])
    .to.equal("Collection Neat Collection 2");
    expect(secondElement.children[0].props.src)
    .to.equal("test2.jpg");
  });
})
