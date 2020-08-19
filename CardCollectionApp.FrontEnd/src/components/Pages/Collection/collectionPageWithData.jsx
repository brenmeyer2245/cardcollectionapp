import React from 'react'
import CollectionData from './collectionPage.data';
import CollectionPage from './collectionPage.component';

const CollectionPageWithData = (routeProps) => (<CollectionPage vm={CollectionData} routeProps={routeProps}/>)

export default CollectionPageWithData;

