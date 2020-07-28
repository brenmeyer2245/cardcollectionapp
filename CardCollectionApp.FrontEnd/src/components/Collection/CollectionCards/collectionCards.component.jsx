import React from 'react'
import CardThumbnail from '../../Cards/CardThumbnail/cardThumbnail.component';

const CollectionCards = (props) => {
  const {vm} = props;
  return (
  <div className="Collection-Cards" >
    {vm.collectionCards.map(
      (currentCard, index) => (
        <CardThumbnail vm={currentCard} key={index}/>
      )
    )}
  </div>
)}

export default CollectionCards;
