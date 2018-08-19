import React, { Component } from "react";

class Result extends Component {
  render() {
    const result = this.props.result;

    if (!result) {
      return null;
    }

    return <li> {result} </li>;
  }
}

export default Result;
