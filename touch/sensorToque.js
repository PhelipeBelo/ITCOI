const LED = 25;
const BT = 33;

pinMode(LED, "output");

let touchBT = require("touch.js").connect(BT);

setInterval(function(){
    console.log("Valor do Touch", touchBT.read() );

    if (touchBT.read() < 50)
        digitalWrite(LED, 1)
    else
        digitalWrite(LED, 0)
}
, 500);