import React, { Component } from 'react';
import './App.css';

// IMPORTS CONTAINERS
import SidebarContainer from './Containers/SidebarContainer/SidebarContainer';

class App extends Component {
  render() {
    return (
      <div style= {{ 'height':'100%' }} className="App">
				<SidebarContainer />
          
			</div>
    );
  }
}

export default App;
