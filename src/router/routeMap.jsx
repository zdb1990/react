import { Router , Route , IndexRoute }from 'react-router';
import React, { Component } from 'react';
import Home  from './../containers/Home/Home';
import App from './../App';
class RouteMap extends Component{
    render(){
        return(
            <Router history={this.props.histroy}>
                <Route path='/' component={App}>
                   <IndexRoute component={Home}></IndexRoute>
                </Route>
            </Router>
        )
    }
}

export default RouteMap;