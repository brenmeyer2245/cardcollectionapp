
import React from 'react';

const AttributeTable = ({vm}) => (
  <section>
    <table>
      <thead>
        {vm.attributeKeys.map((attributeKey, index) =>
            (<th key={index}>
              {attributeKey}
            </th>)
        )}
      </thead>
      <tbody>
      {vm.attributeValues.map((attributeValueRow, index) =>
          <tr key={index}>
            {attributeValueRow.map((attributeValue =>
                (<td key={index}>
                  {attributeValue}
                </td>)
            ))}
          </tr>
        )}
      </tbody>
    </table>
  </section>
)


export default AttributeTable
