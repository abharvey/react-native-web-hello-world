import React, { Component } from "react";
import { func, string, object } from "prop-types";
import { View } from "react-native";
import { connect } from "react-redux";
import { appStyle } from "../styles/styles";
// dumb components
import Header from "../components/Header";
import HelloWorld from "../components/HelloWorld";
// actions
import { toggleColor } from "../../actions/actions";

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <HelloWorld onPress={() => dispatch(toggleColor())} color={color} />
      </View>
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
