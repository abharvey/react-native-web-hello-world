import React, { Component } from "react";
import { func, string } from "prop-types";
import styled from "styled-components/primitives";

const Container = styled.View`
  width: 100%;
  text-align: center;
  user-select: none;
`;

const Hello = styled.Text`
  color: ${props => props.color};
`;

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <Container onClick={onClick}>
        <Hello color={color}>Hello World</Hello>
      </Container>
    );
  }
}

HelloWorld.propTypes = {
  onClick: func.isRequired,
  color: string.isRequired
};
