import React from 'react'
import HomeData from './home.data';
import Home from './home.component';

const HomeWithData = (routeProps) => (<Home vm={HomeData} routeProps={routeProps}/>)

export default HomeWithData;

