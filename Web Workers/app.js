const worker = new Worker("worker.js");

function printMessage() {
    
  worker.postMessage(120);

  worker.onmessage = function (event) {
    console.log(event.data);
  };
}

printMessage();
