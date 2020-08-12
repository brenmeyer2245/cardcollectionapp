import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home.component';

const adapter = new Adapter();
enzyme.configure({adapter});
