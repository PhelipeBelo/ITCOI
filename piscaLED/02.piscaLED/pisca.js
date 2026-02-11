const LED = 25;
let statusLED = 0;
const LEDD = 26;

pinMode(LED, "output")

setInterval(function(){
    statusLED = !statusLED
    digitalWrite(LED, statusLED)
},1000)

