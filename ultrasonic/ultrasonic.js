const TRIGGER = 33;
const ECHO = 32;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");

function leDistancia(info){

    let tempo = info.time - info.lastTime;
    let distancia = (340 * tempo / 2) * 100;

    console.log("A distancia medida eh: " + distancia.toFixed(1) + "cm")

}

setInterval(function(){
    
    setWatch(leDistancia, ECHO, {edge: "falling"});

    digitalPulse(TRIGGER, 1, 1);
}, 500)