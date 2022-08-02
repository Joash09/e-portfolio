// Wrapping eventlistener in a Promise
var inputElement = document.getElementById('input');
function input_promise() {
  return new Promise((resolve, promise) => {
    inputElement.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        input = inputElement.value;
        resolve(input);
      }
    });
  });
}

// Define Module and override print function
var Module = {
  preRun: [],
  postRun: [],
  print: function() {
    var e = document.getElementById("output");
    return e&&(e.value=""), function(t) {
      arguments.length>1 && (t=Array.prototype.slice.call(arguments).join(" ")),
      console.log(t),
      e&&(e.value+=t + "\n", e.scrollTop=e.scrollHeight)
    }
  }()
}
