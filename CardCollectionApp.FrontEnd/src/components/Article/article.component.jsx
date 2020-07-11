import React from 'react';

const Article = (props) => {
  return (
      (<article>
          {/* Label */}
          <h1> {props.vm.title} </h1>

          {/* Text is broken down into an array of chunks */}
          {props.vm.contentText.map(
            (textChunk, index) => {
              console.log(textChunk, index)
              return (
                <div key={index}>
                  <p>
                    {textChunk}
                  </p>
                  {/* if there's an image at this index, include it */}
                  {
                    props.vm.contentImages[index] &&
                    (
                    <figure>
                      <img
                        alt = { props.vm.contentImages[index].label }

                        src = {props.vm.contentImages[index].src}

                          // Float the image R||L depending on index%2
                          className={
                            determineFloatByIndex(index)
                          }
                      />
                      <figcaption>
                        { props.vm.contentImages[index].label  }
                      </figcaption>
                    </figure>
                    )
                  }
                </div>
              )
            })
          }
    </article>
    )
  )
};

function determineFloatByIndex(index){
  if (index % 2) return 'float-left';
  return 'float-right';
}


export default Article
