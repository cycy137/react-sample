import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import NavContainer from './NavContainer';
import MainContainer from './MainContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <NavContainer ></NavContainer>
          <MainContainer ></MainContainer>
      </div>
    );
  }
}

export default App;
