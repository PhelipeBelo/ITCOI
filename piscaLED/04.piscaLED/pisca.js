const LED1 = 25;
const LED2 = 26;

let statusLED1 = 0;
let statusLED2 = 0;

pinMode(LED1, "output")
pinMode(LED2, "output")

setInterval(function(){
    statusLED1 = !statusLED1
    digitalWrite(LED1, statusLED1)
},500)

setInterval(function(){
    statusLED2 = !statusLED2
    digitalWrite(LED2, statusLED2)
},1000)
