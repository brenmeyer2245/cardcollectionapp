import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Article, AttributeList,AttributeTable, ImageMap, SingularItem} from './components';

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
     </Switch>
    )
  }
}

export default withRouter(Routes);


