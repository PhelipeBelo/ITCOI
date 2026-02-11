const LED1 = 25;
const LED2 = 26;

pinMode(LED1, "output")
pinMode(LED2, "output")

function PiscaLED(){
    digitalWrite(LED1, 1);
    digitalWrite(LED2, 0);
    setTimeout(function(){
        digitalWrite(LED1, 0);
        digitalWrite(LED2, 1);
        setTimeout(PiscaLED, 1000);
    },500);
}

PiscaLED()