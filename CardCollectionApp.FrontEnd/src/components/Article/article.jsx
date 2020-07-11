import React from 'react';
import {connect} from 'react-redux'

const Article = (props) => {
  return (
      (<article>
          {/* Label */}
          <h1 className="test"> This is the Article </h1>

          {/* Text is broken down into an array of chunks */}
          {props.article.text.map(
            (textChunk, index) => {
              return (
                <div key={index}>
                  <p>
                    {textChunk}
                  </p>
                  {/* if there's an image at this index, include it */}
                  {
                    props.article.text &&
                    (<img alt="text associated item"

                        // Float the image R||L depending on index%2
                        className={
                          determineFloatByIndex
                        }
                    />)
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


const mapStateToProps = (state) => ({
  article: {
    text: []
  }
});

export default connect(mapStateToProps)(Article)
