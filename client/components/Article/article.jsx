import React from 'react';
import './article.scss'

export default (props) => {
  return (
    <article>
        {/* Label */}
        <title> {props.article.title} </title>
        {/* Text is broken down into an array of chunks */}
        {props.article.text.map(
          (textChunk, index) => {
            <p>
              {textChunk}
            </p>
            //if there's an image at this index, include it
            {props.article.text &&
              <img

                  // Float the image R||L depending on index%2
                  className={
                    determineFloatByIndex
                  }
              />
            }

          })
        }
  </article>
  )
};

function determineFloatByIndex(index){
  if (index % 2) return 'float-left';
  return 'float-right';
}
