const LED1 = 25;
const LED2 = 26;
const LED3 = 27;
const LED4 = 13;
const LED5 = 12;

pinMode(LED1, "output")
pinMode(LED2, "output")
pinMode(LED3, "output")

function PiscaLED(){
    digitalWrite(LED1, 1);
    digitalWrite(LED2, 0);
    digitalWrite(LED3, 0);
    digitalWrite(LED4, 0);
    digitalWrite(LED5, 1);

    setTimeout(function(){
        digitalWrite(LED1, 0);
        digitalWrite(LED2, 0);
        digitalWrite(LED3, 1);
        digitalWrite(LED4, 1);
        digitalWrite(LED5, 0);

        setTimeout(function(){
            digitalWrite(LED1, 0);
            digitalWrite(LED2, 1);
            digitalWrite(LED3, 0);
            digitalWrite(LED4, 1);
            digitalWrite(LED5, 0);
            setTimeout(PiscaLED, 3000);
        },5000)
        
    },5000);
}

PiscaLED()