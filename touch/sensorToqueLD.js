const LED = 25;
const ON = 33;
const OFF = 32;


pinMode(LED, "output")

let touchBTOn = require("touch.js").connect(ON);
let touchBTOff = require("touch.js").connect(OFF);

setInterval(function () {


    if (touchBTOn.read() < 50) {
        digitalWrite(LED, 1)
        console.log("Ligado");
    }

    else if
        (touchBTOff.read() < 50) {
        digitalWrite(LED, 0);
        console.log("Desligado");
    }

}, 500);