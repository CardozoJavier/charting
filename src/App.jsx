import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// IMPORTS CONTAINERS
import SidebarContainer from './Containers/SidebarContainer/SidebarContainer';

class App extends Component {
  render() {
    return (
      <div style= {{ 'height':'100%' }} className="App">
				<Route path='/' component= { SidebarContainer } />
			</div>
    );
  }
}

const mapStateToProps= (state) => {
	return{}
}
const mapDispatchToProps= (dispatch) => {
	return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);