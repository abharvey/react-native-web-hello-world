import React, { Component } from "react";
import { object } from "prop-types";
import { Provider } from "react-redux";
import ReactNativeWebHelloWorld from "./App";
import styled from "styled-components/primitives";
// import DevTools                 from './DevTools';
/* <DevTools /> */

const Main = styled.View``;

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Main>
          <ReactNativeWebHelloWorld />
        </Main>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: object.isRequired
};
