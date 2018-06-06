import React, { Component } from 'react';
import './App.css';
import RouteMap from './router/routeMap';
class App extends Component {
  render() {
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}

export default App;
