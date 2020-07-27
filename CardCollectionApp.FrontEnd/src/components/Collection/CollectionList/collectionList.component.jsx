import React, {useState} from 'react'
import {CardThumbnail} from '../../Cards';

const linkToAddress = (address, history) => {
  history.location = address;
}

const CollectionList = (props) => {
  const {vm} = props;
  const [hoveredElementIndex, setHoveredElementIndex] = useState(-1);
  return (
  <div className="Collection-List" >
    {vm.collectionChoices.map(
      (currentCollection, index) => {
        return (<a
          href="#"
          alt-text={`Collection ${currentCollection.collectionTitle}`}
          onClick = {() => linkToAddress(currentCollection.id, window)}
          onMouseEnter= {() => setHoveredElementIndex(index)}
          onMouseLeave= {() => setHoveredElementIndex(-1)}

          key={index}
          className={`CardThumbnail-medium ${hoveredElementIndex === index? 'faded' : ''}`}
        >
          <img
            src={currentCollection.collectionThumbnail}
          />
          <label>
            {currentCollection.collectionTitle}

          </label>
        </a>
      )
    })}
  </div>
  )
}

export default CollectionList;
