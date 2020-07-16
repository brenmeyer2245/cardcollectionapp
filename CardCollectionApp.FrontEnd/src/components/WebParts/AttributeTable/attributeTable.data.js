const AttributeTableData = {
  title: 'Attribute List Title',
  attributeKeys: [1,2,3,4,5],
  attributeValueRows: [
    ['a','b','c','d','e'],
  ],
  editMode: true,
  handleChange:(evt)=> console.log(evt.target.value)
}

export default AttributeTableData;
