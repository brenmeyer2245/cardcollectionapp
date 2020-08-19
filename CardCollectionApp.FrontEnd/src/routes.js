import React, {Component} from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {
  Article,
  AttributeList,
  AttributeTable,
  ImageMap,
  SingularItem,
  CardThumbnail,
  CollectionCards,
  CollectionList,
  CardFilterBar,
  CardFull,
  Home,
  GroupList,
  CollectionPage
} from './components';

class Routes extends Component {
  componentDidMount(){
  }
  render(){
    return (
     <Switch>
       <Route path='/home'  component={Home}/>
       <Route exact path='/article'  component={Article}/>
       <Route exact path='/attributeList'  component={AttributeList}/>
       <Route exact path='/attributeTable'  component={AttributeTable}/>
       <Route exact path='/imageMap'  component={ImageMap}/>
       <Route exact path='/singularItem'  component={SingularItem}/>
       <Route exact path='/cardThumbnail'  component={CardThumbnail}/>
       <Route exact path='/collectionCards'  component={CollectionCards}/>
       <Route path='/collections/:collectionId'  component={CollectionPage}/>
       <Route exact path='/collectionList'  component={CollectionList}/>
       <Route exact path='/filtered'  component={CardFilterBar}/>
       <Route exact path='/fullCard'  component={CardFull}/>
       <Route exact path='/groupList'  component={GroupList}/>
     </Switch>
    )
  }
}

export default withRouter(Routes);


