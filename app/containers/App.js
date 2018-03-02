import React, { Component } from "react";
import { func, string, object } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components/primitives";

// dumb components
import Header from "../components/Header";
import HelloWorld from "../components/HelloWorld";
// actions

const Container = styled.View``;

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <Container>
        <Header />
        <HelloWorld color={color} handleTouch={() => dispatch(toggleColor())} />
      </Container>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: func.isRequired,
  color: string.isRequired,
  data: object.isRequired
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
