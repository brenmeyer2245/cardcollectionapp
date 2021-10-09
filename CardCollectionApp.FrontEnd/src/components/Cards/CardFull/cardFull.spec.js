import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardFull from './cardFull.component';
import CardFullData from './cardFull.data';

const adapter = new Adapter();
enzyme.configure({adapter});

describe('Full Card Page ', () => {
    let fullCard;
    beforeEach(() => {
        fullCard = mount(<CardFull vm={CardFullData}/> )
    })
    it('renders card title', () => {
        
    })
})
