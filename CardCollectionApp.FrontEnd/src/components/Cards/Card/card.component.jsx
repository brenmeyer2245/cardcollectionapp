import React from 'react';
import {WebPartTypeConstants} from '../../../utilities/constants';
import {Article,
  AttributeList,
  AttributeTable,
  SingularItem,
  ImageMap
} from '../../WebParts'

const resolveWebPart = (webPartData) => {
  switch(webPartData.webPartType){
    case WebPartTypeConstants.ARTICLE: {
      return <Article vm={webPartData}/>
    }
    case WebPartTypeConstants.ATTRIBUTE_LIST: {
      return <AttributeList vm={webPartData}/>
    }
    case WebPartTypeConstants.ATTRIBUTE_TABLE: {
      return <AttributeTable vm={webPartData}/>
    }
    case WebPartTypeConstants.SINGULAR_ITEM: {
      return <SingularItem vm={webPartData}/>
    }
    case WebPartTypeConstants.MAP_IMAGE: {
      return <ImageMap vm={webPartData}/>
    }
  }
}

const CardFull = ({vm}) => {
  return (
  <div className="CardFull-Container">

    {/* Iterate through the props WebParts */}
    {vm.cardSections.map(
      (webPartData, index) => {
        return (<section
          className="CardFull-Section"
          key={index}
        >
          {/* Resolve to WebPart */}
          {resolveWebPart(webPartData)}
        </section>)
      }
    )}
  </div>
)}

export default CardFull;
