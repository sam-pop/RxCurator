import React, { Component } from "react";

class Barcode extends Component {
  render() {
    const barcode = this.props.barcode;

    if (!barcode) {
      return null;
    }

    return <li> {barcode} </li>;
  }
}

export default Barcode;
