import React from "react";
import { useParams } from "react-router";
import {classes, createModifiers} from '../../../utilities/classes'
import CardThumbnail from "../../Cards/CardThumbnail/cardThumbnail.component";


export default ({vm}) => {
    
    return <div className={classes(["Collection-container"])}> 
        <h1 className={classes(["Collection-title"])}>{vm.collectionTitle}</h1>
        {vm.collectionCards.map((currentCard, index) => (
        <CardThumbnail vm={currentCard} key={index}/>
      ))}
    </div>
}