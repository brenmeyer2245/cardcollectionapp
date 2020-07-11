import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Article from './components/Article/articleWithData';

class Routes extends Component {
  componentDidMount(){

  }
  render(){
    return (
     <Switch>
       <Route exact path='/article'  component={Article}/>
     </Switch>
    )
  }
}

export default withRouter(Routes);


