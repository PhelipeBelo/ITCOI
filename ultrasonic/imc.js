const TRIGGER = 33;
const ECHO = 32;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");

let peso = 70;

function altura(info){
    
    let tempo = info.time - info.lastTime;
    let distancia = (340 * tempo / 2) * 100;

    console.log("A distancia medida eh: " + distancia.toFixed(1) + "cm");

    let altura = (220 - distancia)/100;

    console.log(altura.toFixed(1) + "m");


    let imc = peso/(Math.pow(altura, 2));

    console.log(imc.toFixed(1));

    if (imc  > 40){
        console.log("Obesidade Grave")
    }
    else if (imc > 29.9 && imc <= 39.9) {
        console.log("Obesidade")
    }
    else if (imc > 24.9 && imc <= 29.9) {
        console.log("Sobre peso")
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Normal")
    }
    else{
        console.log("Abaixo do peso")
    }
    
}

setInterval(function(){
    
    setWatch(altura, ECHO, {edge: "falling", repeat: false});

    digitalPulse(TRIGGER, 1, 1);
}, 2000)