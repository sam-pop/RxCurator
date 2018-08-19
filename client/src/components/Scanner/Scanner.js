import React, { Component } from "react";
import Quagga from "quagga";

class Scanner extends Component {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment" // or user
          }
        },
        locator: {
          patchSize: "large",
          halfSample: true
        },
        numOfWorkers: navigator.hardwareConcurrency,
        // numOfWorkers: 4,
        decoder: {
          readers: ["ean_reader"]
        },
        locate: true
      },
      function(err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected = result => {
    this.props.onDetected(result);
    console.log(result);
  };

  render() {
    return <div id="interactive" className="viewport" />;
  }
}

export default Scanner;
