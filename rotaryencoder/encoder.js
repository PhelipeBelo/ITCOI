const SW = 17;
const DT = 16;
const CLK = 4;
let codigo = 222;
let tentativa;
let digitos = [];
let pulso = 0;

let encoder = require("Encoder").connect(DT, CLK, function (direction) {
    pulso = pulso + direction;
    
    if (pulso < 0) {
        pulso = 0;
    }

    if (pulso > 9) {
        pulso = 9;
    }
    
    console.log("Pulsos: " + pulso);
});

let flagSW = 0;
pinMode(SW, "input_pullup");

setInterval(function () {

    if (digitalRead(SW) == 0 && flagSW == 0) {
        console.log(`Número ${pulso} salvo`);
        flagSW = 1;
        digitos.push(pulso);
    }

    else if (digitalRead(SW) == 1 && flagSW == 1) {
        flagSW = 0;
    }

    tentativa = digitos.join("");

    if (tentativa.length == String(codigo).length) { 
        if (tentativa == String(codigo)) {
            console.log("SENHA CORRETA");
        } else {
            console.log("SENHA INCORRETA");
        }

        digitos = [];   
        tentativa = ""; 
    }

}, 100);