import React, { Component, PropTypes } from 'react';
import { Provider }             from 'react-redux';
import ReactNativeWebHelloWorld from './App';
// import DevTools                 from './DevTools';

{/* <DevTools /> */}
export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ReactNativeWebHelloWorld />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};