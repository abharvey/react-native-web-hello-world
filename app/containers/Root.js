import React, { Component } from "react";
import { object } from "prop-types";

import { Provider } from "react-redux";
import StockInsights from "./App";

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StockInsights />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: object.isRequired
};
