import React from 'react'
import {Link, Route} from 'react-router-dom'
import {CollectionCards, GroupList} from '../../index';


const CollectionPage = (props) => {
  console.log('[Props]',props)
  const {vm} = props;
  return (
  <section className={"CollectionPage"}>

    {/* Header */}
    <div className="CollectionPage-Header">
       {/* Hero Image */}

       {/* Description */}

        {/* Nav Bar */}
        <nav className="CollectionNav-Container">
        <Link
          className="CollectionNav-Link"
          to={`/collections/${vm.collectionId}`}
          >
          Collections
        </Link>
        {/* Card Groupings for this Collection*/}
        <Link
          className="CollectionNav-Link"
          to={`/collections/${vm.collectionId}/groups`}
          >
          Groups
        </Link>
        {/* Collection info and settings*/}
        <Link
          className="CollectionNav-Link"
          to={`/collections/${vm.collectionId}/profile`}
          >
          Profile
        </Link>
      </nav>
    </div>

    <div className="Collection-Body">
      {/* Cards */}
      <Route
        exact path={`/collections/${vm.collectionId}`}
        render={ () => (<CollectionCards vm={{collectionCards: vm.collectionCards}}/>)}
      />
      {/* Groups */}
      <Route
        exact path={`/collections/${vm.collectionId}/groups`}
        render={() => (<GroupList vm={{cardGroupingTypes: vm.cardGroupingTypes}}/>)}
      />
      </div>
  </section>
)}

export default CollectionPage;
