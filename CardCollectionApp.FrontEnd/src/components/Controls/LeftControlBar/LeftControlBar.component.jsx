import React from 'react'
import {classes, createModifiers} from '../../../utilities/classes'
import {Link} from 'react-router-dom'

export default ({vm}) => {
  return (

      // Logo, Home Link, Search Button
      <div>
        <section
          className={classes(["LeftControlBar-Section", vm.styleTemplate.leftControlBar])}
        >
          <ul>
            <li
              className={classes(["LeftControlBar-Link"])}
            >
              <Link to={'/home'}>
                <img src="./staticpics/home.png"/>
                <span> Home </span>
              </Link>
            </li>
            <li
              className={classes(["LeftControlBar-Link"])}
            >
              <Link to={'/search'}>
                  <img src="./staticpics/search.png"/>
                  <span> Search </span>
              </Link>
            </li>

          </ul>
        </section>
        <hr/>


        {/* Create */}
        <section className={classes(["LeftControlBar-Section", vm.styleTemplate.leftControlBar])}>
        <ul>
            <li
              className={classes(["LeftControlBar-Link"])}
            >
                <Link
                  to={"/create/collection"}
                >
                  <img src="./staticpics/add.png"/>
                  <span> Create Collection</span>
                </Link>
            </li>
            <li
              className={classes(["LeftControlBar-Link"])}
            >
                <Link
                  to={"/create/card"}
                  >
                  <img src="./staticpics/add.png"/>
                  <span> Create Card</span>
                </Link>
            </li>
          </ul>
        </section>
        <hr/>


        {/* Collection List */}
        <section className={classes(["LeftControlBar-Section", vm.styleTemplate.leftControlBar])}>

          {/* Collections that the User is an Owner of */}
          <div className={classes(["LeftControlBar-CollectionList", vm.styleTemplate.leftControlBar])}>
            <h4>My Collections</h4>
            <ul>
              {vm.myCollections.map((collection, id) => {
                return(
                  <li>
                    <Link
                      key={id}
                      className={
                        classes(["LeftControlBar-CollectionLink"])
                      }
                      to={`/collections/${collection.id}`}
                    >
                      {collection.name}
                    </Link>
                  </li>)
              })}
            </ul>
          </div>
          <br/>
          {/* Collections that the User is a Contributor of */}
          <div className={classes(["LeftControlBar-CollectionList", vm.styleTemplate.leftControlBar])}>
            <h4>Followed Collections</h4>
            <ul>
              {vm.followedCollections.map((collection, id) => {
                return(
                  <li>
                    <Link
                      key={id}
                      className={
                        classes(["LeftControlBar-CollectionLink", vm.styleTemplate.leftControlBar])
                      }
                      to={`/collections/${collection.id}`}
                    >
                      {collection.name}
                    </Link>
                  </li>)
              })}
            </ul>
          </div>
        </section>
      </div>
)};
