import React from 'react';

const Article = (props) => {
  return (
      (
      <div className="WebPart-container">
          {/* Label */}
          <h1 className="WebPart-title"> {props.vm.title} </h1>

          {/* Text is broken down into an array of chunks */}
          {props.vm.contentText.map(
            (textChunk, index) => {
              console.log(textChunk, index)
              return (
                <div key={index} className="Article-section">
                  <p className="Article-text">
                    {textChunk}
                  </p>
                  {/* if there's an image at this index, include it */}
                  {
                    props.vm.contentImages[index] &&
                    (
                    <>
                    <div className="clearfix"></div> 
                    <figure className={`Article-figure ${index % 2 ? "float-right" : "float-left"}`} > 
                      <img className="Article-figureImage"
                        alt = { props.vm.contentImages[index].label }

                        src = {props.vm.contentImages[index].src}

                          // Float the image R||L depending on index%2
                          className={
                            determineFloatByIndex(index)
                          }
                      />
                      <figcaption className="Article-figureCaption">
                        { props.vm.contentImages[index].label  }
                      </figcaption>
                    </figure>
                   </>
                    )
                  }

                </div>
              )
            })
          }
    </div>
    )
  )
};

function determineFloatByIndex(index){
  if (index % 2) return 'position-left';
  return 'position-right';
}


export default Article
