import React from 'react'
import {Link, Route} from 'react-router-dom'


const Home = (props) => {
  const {vm} = props;
  return (
  <div className={"Home"}>
    {/* Nav Links for Home Page */}
    <nav className="HomeNav-Container">
      <Link
        className="HomeNav-Link"
        to={"/home"}
        >
        Collections
      </Link>
      {/* Users from other collections  */}
      <Link
        className="HomeNav-Link"
        to={"/home/collectors"}
        >
        Collectors
      </Link>

    </nav>
    <div className="Home-RoutesContainer">
      {/* Collections */}
      <Route
        exact path={"/home"}
        render={
          //Collection Thumbnails grouped by type {MyCollections, Followed Collections }
          () =>  {
          return (
            <section className="HomeCollections-Container">
              {vm.collectionSections.map(
                (collectionSection, id) => (
              <div
                className="CollectionList-Container"
                key={`collectionSection-${id}`}
                >
                <h4 className="CollectionList-Title">
                  {collectionSection.title}
                </h4>
                <ul className="CollectionList-List">
                  {collectionSection.collections.map(
                    (collection, index) => (
                    <li
                      className="CollectionList-ListItem"
                      key={`HomeCollectionList-Item-${index}`}
                    >
                      {/* collection thumbnail */}
                      <img
                        className="CollectionList-ItemProfileImg"
                        src={collection.collectionThumbnail}
                        alt-text={`${collection.collectionTitle} profile icon`}
                      />
                      {/* collection link */}
                      <div
                         className="CollectionList-CollectionInfoContainer"
                      >
                        <Link
                          className="CollectionList-CollectionListLink"
                          to={`/collections/${collection.id}`}>
                          {collection.collectionTitle}
                        </Link>
                      </div>
                    </li>)
                  )}
                </ul>
              </div>)
              )}
            </section>
          )
        }
      }
      />
      {/* Collectors */}
      <Route
        exact path={"/home/collectors"}
        render={
          //Collector Thumbnails grouped by type {Collaborators,
        //Friends}
          () => (

            <section className="HomeCollectors-Container">
              {vm.collectorSections.map(
                (collectorSection, id) => (
              <div
                className="CollectorsList-Container"
                key={`collectorSection-${id}`}
                >
                <h4 className="CollectorList-Title">
                  {collectorSection.title}
                </h4>
                <ul className="CollectorList-List">
                  {collectorSection.collectors.map(
                    (collector, index) => (
                    <li
                      className="CollectorList-ListItem"
                      key={index}
                    >
                      {/* collector thumbnail */}
                      <img
                        className="CollectorList-ItemProfileImg"
                        src={collector.userProfilePic}
                        alt-text={`${collector.userName} profile icon`}

                      />
                      {/* List of Collector's Collections */}
                      <h5
                        className="CollectorList-CollectionListTitle"
                      >
                      {`${collector.userName}'s Collections`}
                      </h5>
                      <ul
                        className="CollectorList-CollectionList"
                      >
                        {collector.collections.map(
                          (userCollection, id) => (
                            <Link
                            className="CollectorList-CollectionListLink"  to={`/collections/${userCollection.id}`}
                            key={`${collector.name}-${id}`}
                            >
                              {userCollection.collectionTitle}
                            </Link>
                          )
                        )}
                      </ul>
                    </li>)
                  )}
                </ul>
              </div>)
              )}
            </section>
          )
        }
      />
      </div>
  </div>
)}

export default Home;
