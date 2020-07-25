import React from 'react'
import {CardThumbnail} from '../../Cards';

const CollectionCards = (props) => {
  const {vm} = props;
  return (
  <div className="Collection-Cards" >
    {vm.collectionCards.map(
      (currentCard, index) => (
        <CardThumbnail vm={currentCard}/>
      )
    )}
  </div>
)}

export default CollectionCards;
