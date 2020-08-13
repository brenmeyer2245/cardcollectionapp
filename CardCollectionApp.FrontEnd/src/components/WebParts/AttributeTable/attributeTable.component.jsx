
import React from 'react';

const AttributeTable = ({vm}) => {
  return (
  <div class="AttributeTable">
    <table>
      <thead>
        <tr>
        {vm.attributeKeys.map((attributeKey, index) =>
            (<th key={`th-${index}`}>
              <input
                value={attributeKey}
                disabled={!vm.editMode}
                onChange={vm.handleChange}
              />
            </th>)
        )}
        </tr>
      </thead>
      <tbody>
      {vm.attributeValueRows.map((attributeValueRow, index) =>
          <tr key={`tr-${index}`}>
            {attributeValueRow.map(((attributeValue, valueIndex) => (<td key={valueIndex}>
                <input
                  value={attributeValue}
                  disabled={!vm.editMode}
                  onChange={vm.handleChange}
                />
                </td>)
            ))}
          </tr>
        )}
      </tbody>
    </table>
  </div>
)
}

export default AttributeTable
