window.onload = function() {
  alert("hey!");
  // if (
  //   navigator.mediaDevices &&
  //   typeof navigator.mediaDevices.getUserMedia === "function"
  // )
  {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#test")
        },
        decoder: {
          readers: ["ean_reader"]
          // readers: ["code_128_reader"]
        }
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
        Quagga.onDetected(function(data) {
          console.log(data);
          alert(data.codeResult.code);
        });
      }
    );
  }
};
