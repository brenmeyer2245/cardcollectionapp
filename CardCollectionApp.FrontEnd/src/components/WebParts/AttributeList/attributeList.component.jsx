import React from 'react';

const AttributeList = ({vm}) => (
  <div>
    <h4> {vm.title} </h4>
    <ul>
    {vm.attributes
          .map((attribute, index) => {
                return (<li key={index}>
                    <b>
                        {attribute.key}
                    </b>
                    <span>
                        {attribute.value}
                    </span>
                  </li> )
                })
    }
    </ul>
  </div>
)


export default AttributeList
