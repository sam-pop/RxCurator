window.onload = function() {
  alert("onload run!");

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

      {
        Quagga.onDetected(function(result) {
          var last_code = result.codeResult.code;

          // Quagga.stop();
          console.log("barcode: " + last_code);
        });
      }
    }
  );
};
