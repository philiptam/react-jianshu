import React, { Component } from 'react';
import {GlobalStyle} from "./style";
import {GlobalStyle1} from './statics/iconfont/iconfont'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <GlobalStyle1/>
        <Header/>
      </div>
    );
  }
}

export default App;
