const teclado_linha = [19, 18, 5, 17];
const teclado_coluna = [16, 4, 2, 15];
const teclado_S = "D#0*C987B654A321";

let senha = "222";
let digitos = [];
let teclado = require("KeyPad").connect(teclado_coluna, teclado_linha);
let teclaAnt = -1;

setInterval(function () {

    let tecla = teclado.read();

    if (tecla >= 0 && tecla != teclaAnt) {
        let char = teclado_S[tecla];
        if (char === 'B') {                       
            console.log(`Dígito anterior apagado`);
            digitos.pop();                        
        }
        else {
            console.log(`Dígito ${char} salvo`);
            digitos.push(char);
        }
    }

    teclaAnt = tecla;

    let tentativa = digitos.join("");

    if (tentativa.length == senha.length) {
        if (tentativa == senha) {
            console.log("SENHA CORRETA");
        } else {
            console.log("SENHA INCORRETA");
        }

        digitos = [];
    }

}, 100);