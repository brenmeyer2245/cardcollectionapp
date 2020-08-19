import React from 'react';
import {Link} from 'react-router-dom';

const GroupList = ({vm}) => {
  return (
    <section className="GroupList">
       {vm.cardGroupingTypes.map(
                (groupingType, id) => (
              <div
                className="GroupList-Container"
                key={`grouptype-${id}`}
                >
                <h4 className="GroupList-Title">
                  {groupingType.type}
                </h4>

                <ul className="GroupList-List">
                  {groupingType.groups.map(
                    (cardGroup, index) => (
                    <li
                      className="GroupList-ListItem"
                      key={`GroupList-Item-${index}`}
                    >
                      {/* GroupList thumbnail */}
                      <img
                        className="GroupList-ItemProfileImg"
                        src={cardGroup.groupThumbnail}
                        alt-text={`${cardGroup.groupTitle} profile icon`}
                      />
                      {/* GroupList link */}
                      <div
                         className="GroupList-CardGroupInfoContainer"
                      >
                        <Link
                          className="GroupList-CardGroupListLink"
                          to={`/cardGroups/${cardGroup.id}`}>
                          {cardGroup.groupTitle}
                        </Link>
                      </div>
                    </li>)
                  )}
                </ul>
              </div>)
              )}
            </section>
)}

export default GroupList;
