import React from 'react';

const SingularItem = (props) => {
  console.log(props);
   return  (
      <section>
         {/* Header  */}
         <div>
          <input
             value={props.vm.header.value}
              disabled={!props.vm.editMode}
              type="text"
              onChange={props.vm.handleChange}
            />
        </div>

        {/* Multiline text */}
        <div>
          <label>
            {props.vm.multiLineText.label}
          </label>
          <textarea
            disabled={!props.vm.editMode}
            value={props.vm.multiLineText.value}
            onChange={props.vm.handleChange}
           />
        </div>

        {/* Singleline text */}
        <div>
          <label>
            {props.vm.singleLineText.label}
          </label>
          <input
            type="text"
            disabled={!props.vm.editMode}
            value={props.vm.singleLineText.value}
            onChange={props.vm.handleChange}
            />
        </div>

        {/* Integer  */}
        <div>
          <label>
            {props.vm.number.label}
          </label>
          <input
            type="number"
            disabled={!props.vm.editMode}
            value={props.vm.number.value}
            onChange={props.vm.handleChange}
            />
        </div>

        {/* Boolean  */}
        <div>
          <label>
            {props.vm.boolean.label}
          </label>
          <input
            type="checkbox"
            disabled={!props.vm.editMode}
            checked={props.vm.boolean.value}
            onChange={props.vm.handleChange}
            />
        </div>

        {/* Date  */}
        <div>
          <label>
            {props.vm.date.label}
          </label>
          <input
            type="date"
            disabled={!props.vm.editMode}
            value={props.vm.date.value}
            onChange={props.vm.handleChange}
            />
        </div>


      </section>
  )
}

export default SingularItem;
