const LDR = 32
const LED = 33

setInterval(function(){
    let valorLDR = analogRead(LDR)
    console.log("Valor do LDR: " + (valorLDR * 100).toFixed(0))

}, 2000)