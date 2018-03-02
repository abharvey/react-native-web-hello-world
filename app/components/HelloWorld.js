import React, { Component } from "react";
import { func, string } from "prop-types";
import styled from "styled-components/primitives";

const Container = styled.View``;

const Hello = styled.Text`
  color: ${props => props.color};
`;

export default class HelloWorld extends Component {
  render() {
    const { onClick, color, handleTouch } = this.props;
    return (
      <Container>
        <Touchable onPress={() => handleTouch()}>
          <Hello color={color}>Hello World</Hello>
        </Touchable>
      </Container>
    );
  }
}

HelloWorld.propTypes = {
  dispatch: func.isRequired,
  onClick: func.isRequired,
  color: string.isRequired
};
