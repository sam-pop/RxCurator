import React, { Component } from "react";
import Quagga from "quagga";

class Scanner extends Component {
  componentDidMount() {
    this.runQuagga();
  }
  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  runQuagga = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream"
          //   constraints: {
          //     width: { min: 640 },
          //     height: { min: 480 },
          //     facingMode: "environment",
          //     aspectRatio: { min: 1, max: 2 }
          //   }
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: navigator.hardwareConcurrency,
        // numOfWorkers: 4,
        frequency: 10,
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

    Quagga.onProcessed(function(result) {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute("width")),
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter(function(box) {
              return box !== result.box;
            })
            .forEach(function(box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });
    Quagga.onDetected(this._onDetected);
  };

  _onDetected = result => {
    this.props.onDetected(result.codeResult.code);
    // Quagga.stop();
  };

  render() {
    return <div id="interactive" className="viewport" />;
  }
}

export default Scanner;
