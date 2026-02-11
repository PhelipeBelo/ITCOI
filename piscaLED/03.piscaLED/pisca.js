const LED1 = 25;
let statusLED = 0;
const LED2 = 26;

pinMode(LED1, "output")
pinMode(LED2, "output")

setInterval(function(){
    statusLED = !statusLED
    digitalWrite(LED1, statusLED)
    digitalWrite(LED2, statusLED)
},1000)

