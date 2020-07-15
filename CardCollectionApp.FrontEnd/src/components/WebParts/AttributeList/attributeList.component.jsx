import React from 'react';

const AttributeList = ({vm}) => (
  <section>
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
  </section>
)


export default AttributeList
