const teclado_linha = [19, 18, 5, 17]
const teclado_coluna = [16, 4, 2, 15]
const teclado_S = "D#0*C987B654A321"

let teclado = require("KeyPad").connect(teclado_coluna, teclado_linha);
let teclaAnt = -1

setInterval(function(){

    let tecla = teclado.read();

    if(tecla >= 0 && tecla != teclaAnt){
        console.log(teclado_S[tecla])
    }
    
    teclaAnt = tecla

},100)