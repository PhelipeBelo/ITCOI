const LED = 25;
const BT = 14;

pinMode(LED, "output")
pinMode(BT, "input_pullup")

setInterval(function(){
    if(digitalRead(BT) == 0){
        digitalWrite(LED, 1)
    }

    else{
        digitalWrite(LED, 0)
    }
},10)