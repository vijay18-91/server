import React, { Component } from 'react';
import AppStyle from './App.css';
import axios from 'axios';

//router
import { BrowserRouter } from 'react-router-dom';

//Containers
import Home from './Containers/Home/Home';

axios.defaults.baseURL = 'http://localhost:9999/';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className= {AppStyle.App}>
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
