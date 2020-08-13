
import React, {Component, useState, createRef} from 'react';

const X_BALANCER_CONST = 5;
const Y_BALANCER_CONST = 10;

export default class ImageMap extends Component {
  constructor(props) {
    super(props)
    this.state = {...props.vm}
    this.imageContainer = createRef();
    this.resolveClickToMarker = this.resolveClickToMarker.bind(this);
  }
  resolveClickToMarker(evt){
    //console.log the position
    const rect = this.imageContainer.current.getBoundingClientRect();

    const {pageX, pageY} = evt
    const markerTracker = {...this.state.existingMarkers};

    const relativeX = ((pageX - X_BALANCER_CONST - rect.x)/ rect.width) * 100;
    const relativeY = ((pageY - Y_BALANCER_CONST - rect.y) /rect.height) * 100;
    //check if it exists in the map
    if (!markerExistsInTracker(markerTracker, relativeX, relativeY)){

      markerTracker[relativeX + ',' + relativeY] = {title: 'New Record'}
      console.log(relativeX,relativeY)
    } else {
      delete markerTracker[relativeX + ',' + relativeY]
    }

    this.setState({existingMarkers: markerTracker});

  }
  render(){
    return (<div>

        <figure
        style={{marginTop: '100px',
        marginLeft:'100px',
        height: '400px',
        width: '400px',
        position: 'relative'
      }}
        onClick={(e) => this.resolveClickToMarker(e)}
        ref={this.imageContainer}
        >
          <img
            alt={this.state.altTitle}
            src={this.state.imageSrc}

            style={{
              position: "absolute",
              zIndex:0,
              height: "inherit",
              width: "inherit"
            }}
            />
            {Object.keys(this.state.existingMarkers)
                    .map((coordinates => {
                        const [x,y] = coordinates.split(',');
                        return (
                        <div
                          className='imageMap-marker'
                          key={coordinates}
                          style={{
                            height: '10px',
                            width: '10px',
                            zIndex: 1,
                            position: "absolute",
                            top: y +'%',
                            left: x +'%'
                          }}

                        />)
                    }))

            }


        </figure>
        <aside style={{float: 'right'}}>
            List of Markers and ability to track them
        </aside>
    </div>)
  }
}

/** Needs tweaking => Use constants for rounding
 * Intended to expand a markers footprint
 * If user clicks on space within 1% of existing marker, return true
 * Next Iteration => return key of existing marker
*/
function markerExistsInTracker(markerTracker, relativeX, relativeY){

  const roundedOptions = [
    Math.ceil(relativeX),
    Math.ceil(relativeY),
    Math.floor(relativeX),
    Math.floor(relativeY),
   ].sort();

   //iterate through the keys in the marker tracker
   const resultsOfSearch = Object.keys(markerTracker)
    .map(key => {
      //round them to option list for nearest whole numbers
      const [x,y] = key.split(',');
        return [
          Math.ceil(x),
          Math.ceil(y),
          Math.floor(x),
          Math.floor(y)
      ].sort()
    }).find(markerValues => {
      debugger
        let i = 0;
        let j = markerValues.length - 1;
        while (i < j){
          //compare values
          if (markerValues[i] === roundedOptions[i]) return true;
          if (markerValues[j] === roundedOptions[j]) return true
          //increment i and j
          i++;
          j--;
        }
      return false;
    })
    // compare to the roundedOptions
    return resultsOfSearch
}
