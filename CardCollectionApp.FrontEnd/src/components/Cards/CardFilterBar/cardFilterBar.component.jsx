
import React, {useState} from 'react'

/**
 * The Card Filter Bar is a higher component that serves the following functions
 *  1. It extracts all the available tags from the given cards in props
 *  2. It tracks selected tags
 *  3. It filters the given list of cards by
 * selected tag
 */


const CardFilterBar = (WrappedComponent, props) => {
  const [tagOptions, updateTagOptions] = useState(extractTags(props))
  return (<div

    >
      {/* Tag Options */}
      <div  className="CardFilterBar">
      {Object.keys(tagOptions)
        .map((tag, id) => {
         return (<button
            key={id}
            onClick={
              //update selectedOptions options
              () => toggleTagSelection(tag, tagOptions, updateTagOptions)
            }
            className={
              `CardFilterBar-tagOption${
                tagOptions[tag]
                ? '--selected'
                : ''}`
            }
          >
            {tag}
          </button>)
        })}
        <button
          className="CardFilterBar-tagOption"
          onClick={() => resetAllTags(tagOptions, updateTagOptions)}>
          Reset
        </button>
      </div>
      <WrappedComponent vm={filterCardsByTag(tagOptions, props)
        }/>
    </div> )
}


/** Helper Functions */
/**
 *
 * @param {*} cardsList
 * output => Object w/keys as the tag and selected as value
 */
const extractTags = (cardsList)=>{
   const obj = cardsList.reduce(
    (tagOptionObject, currentCardData) => {
      currentCardData.associatedTags
        .forEach(tag => {
          if(tagOptionObject[tag] === undefined) {
            //inserting as false so that they won't be selected
            tagOptionObject[tag] = false
          }
        });
        return tagOptionObject
    }, {})
    return obj;
}

const filterCardsByTag = (tagsTracker, cardsList) => {
    //if tags have been selected, filter cards by them
    if (Object.values(tagsTracker).some((val) => val)){
      const collectionCards = cardsList.filter(
                    currentCard => currentCard.associatedTags
                        .some(tag => tagsTracker[tag])
              );

      return {collectionCards}
    } else {
      //return all cards
      return {collectionCards: cardsList}
    }

}

const toggleTagSelection = (tag, tagsTracker, updateTrackerFn)=> {
  const updatedTracker = {...tagsTracker}
  updatedTracker[tag] = !updatedTracker[tag]

  updateTrackerFn(updatedTracker)
}

const resetAllTags = (tagsTracker, updateTrackerFn) => {
   updateTrackerFn(
     Object.keys(tagsTracker)
      .reduce((newTrackerObj, currentKey) => {
        newTrackerObj[currentKey] = false
        return newTrackerObj;
      }, {})
   )
}

export default CardFilterBar;

export {extractTags,   filterCardsByTag,
  resetAllTags,
  toggleTagSelection
}
