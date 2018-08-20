import React, { Component } from "react";

class Med extends Component {
  render() {
    const med = this.props.med;

    if (!med) {
      return null;
    }

    return <li> {med} </li>;
  }
}

export default Med;
