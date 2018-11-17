import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyle1 } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <GlobalStyle1/>
        {/*把store提供给内部组件*/}
        <Provider store={store}>
          <Header/>
        </Provider>

      </div>
    );
  }
}

export default App;
