import React from 'react';


const resolveValueType = (attribute) => {
  switch(attribute.valueDataType){
    case 'text': return <p className="AttributeList-textValue"> 
      {attribute.value}
    </p>
    case 'img':return <img src={attribute.value} className="AttributeList-imgValue"/>
    case 'boolean': return attribute.value ? 
      <p className="AttributeList-booleanValue">&#10004;</p> 
    : <p className="AttributeList-booleanValue">&#10060;</p>
    //media, calculatedInt, multivalue 
  }
}


const AttributeList = ({vm}) => (
  <div className="WebPart-container">
    <h1 className="WebPart-title"> 
      {vm.title} 
    </h1>
    <ul className="AttributeList-container">
    {vm.attributes
          .map((attribute, index) => {
                return (<li className="AttributeList-listItem" key={index}>
                    <label className="AttributeList-label">
                        {attribute.key}
                    </label>
                    {resolveValueType(attribute)}
                  </li> )
                })
    }
    </ul>
  </div>
)


export default AttributeList
