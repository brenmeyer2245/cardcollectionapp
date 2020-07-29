import React from 'react'
import CardFilterBarData from './cardFilterBar.data';
import CardFilterBar from './cardFilterBar.component';
import CollectionCards from '../../Collection/CollectionCards/collectionCards.component'

const CardFilterBarWithData = () => (CardFilterBar(CollectionCards, CardFilterBarData))

export default CardFilterBarWithData;

