import React from 'react'


const CardThumbnail = (props) => {
  const {vm} = props;
  return (
  <div className="CardThumbnail">
    <div className="CardThumbnail-Image"> {/* image */}
      <img
        alt-text={vm.thumbnailPic.altTitle}
        src={vm.thumbnailPic.source}
      />
    </div>
    <div className="CardThumbnail-Title"> {/* title  */}
      <label
        alt-text={vm.thumbnailTitle.altTitle}>
            {vm.thumbnailTitle.text}
      </label>
    </div>
  </div>
)}

export default CardThumbnail;
