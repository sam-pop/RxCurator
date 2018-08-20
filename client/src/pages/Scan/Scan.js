import React, { Component } from "react";
import Scanner from "../../components/Scanner";
import Barcode from "../../components/Barcode";

class Scan extends Component {
  state = {
    scanning: false,
    barcodes: [],
    meds: []
  };

  _scan = () => {
    this.setState({ scanning: !this.state.scanning });
  };

  _onDetected = ean => {
    console.log(this.state.barcodes);
    if (this.state.barcodes.indexOf(ean) === -1)
      this.setState({
        barcodes: this.state.barcodes.concat([ean])
      });
  };

  render() {
    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start Scanning"}
        </button>
        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
        <ul className="barcodes">
          {this.state.barcodes.map((barcode, i) => (
            <Barcode key={barcode + i} barcode={barcode} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Scan;
