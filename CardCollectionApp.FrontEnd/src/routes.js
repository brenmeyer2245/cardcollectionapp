import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {
  Article,
  AttributeList,
  AttributeTable,
  ImageMap,
  SingularItem,
  CardThumbnail,
  CollectionCards,
  CollectionList,
  CardFilterBar
} from './components';

class Routes extends Component {
  componentDidMount(){

  }
  render(){
    return (
     <Switch>
       <Route exact path='/article'  component={Article}/>
       <Route exact path='/attributeList'  component={AttributeList}/>
       <Route exact path='/attributeTable'  component={AttributeTable}/>
       <Route exact path='/imageMap'  component={ImageMap}/>
       <Route exact path='/singularItem'  component={SingularItem}/>
       <Route exact path='/cardThumbnail'  component={CardThumbnail}/>
       <Route exact path='/collectionCards'  component={CollectionCards}/>
       <Route exact path='/collectionList'  component={CollectionList}/>
       <Route exact path='/filtered'  component={CardFilterBar}/>
     </Switch>
    )
  }
}

export default withRouter(Routes);


