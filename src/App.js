import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import MainContainer from './MainContainer/MainContainer'

class App extends Component {
  render() {
    return (
      <MainContainer />
    );
  }
}

export default App;
