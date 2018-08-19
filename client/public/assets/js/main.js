File.prototype.convertToBase64 = function(callback) {
  var reader = new FileReader();
  reader.onloadend = function(e) {
    callback(e.target.result, e.target.error);
  };
  reader.readAsDataURL(this);
};

// window.onload = function() {};

// let file = document.getElementById("capture").files[0];
file.convertToBase64(function(base64) {
  console.log(base64);
  Quagga.init(
    {
      inputStream: {
        name: "Live",
        type: "LiveStream",
        numOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector("#test")
      },
      decoder: {
        readers: [
          "ean_reader"
          // "ean_8_reader",
          // "code_39_reader",
          // "code_39_vin_reader",
          // "codabar_reader",
          // "upc_reader",
          // "upc_e_reader"
        ]
      }
    },
    function(err) {
      if (err) {
        console.log(err);
        return;
      }
      Quagga.start();
      Quagga.decodeSingle(
        {
          readers: ["ean_reader"],
          // patchSize: "large", //UNTESTED
          // locator: { //UNTESTED
          //   patchSize: "large",
          //   halfSample: true
          // },
          locate: true, // try to locate the barcode in the image
          // src: "data:image/jpg;base64," + pic
          src: base64
        },
        function(result) {
          console.log("​test -> result", result);
          // console.log(result.codeResult.code);
        }
      );
      {
        Quagga.onDetected(function(result) {
          var last_code = result.codeResult.code;

          // Quagga.stop();
          console.log("barcode: " + last_code);
        });
      }
    }
  );
});
// }
