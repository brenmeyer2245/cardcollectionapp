import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardThumbnail from './cardThumbnail.component';

const adapter = new Adapter();
enzyme.configure({adapter});


const data = {
  thumbnailTitle: {
    text: 'Example Card',
    altText: 'Example Card'
  },
  thumbnailPic: {
  source: 'test.jpg',
  altTitle: `Picture for Card Titled: Example Card`
 }
}


describe('CardThumbnail', () => {
  let cardThumbnail;

  beforeEach(() => {
    cardThumbnail = shallow(<CardThumbnail vm={data} />)
  })
  it('renders the title as a label', () => {
    expect(
      cardThumbnail
        .find('label')
        .text()
      ).to.be.equal('Example Card')
  })
  it('renders an image with the source and alt title from the provided data ', () => {
    expect(
      cardThumbnail
        .find('.CardThumbnail-Image img')
        .prop('src')
      ).to.equal('test.jpg')
    expect(
      cardThumbnail
        .find('.CardThumbnail-Image img')
        .prop('alt-text')
      ).to.equal('Picture for Card Titled: Example Card')
  })
})
