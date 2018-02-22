import 'babel-polyfill'
import React from 'react'
import withRedux from 'next-redux-wrapper'

import { initStore } from '../src/store'

class App extends React.Component {
  static getInitialProps({ store, isServer, req }) {
    console.log(store, isServer, req);
    store.dispatch({ type: 'INIT' })
    return { isServer, test: 'test' }
  }
  render() {
    return <h1>Cryptory, {this.props.test}</h1>
  }
}

const mapDispatchToProps = dispatch => ({

});

export default withRedux(initStore, null, mapDispatchToProps)(App);