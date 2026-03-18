const POT = 36;
const LED = 27;

setInterval(function(){

    let valorPot = analogRead(POT);
    analogWrite(LED, valorPot)

    console.log("Porcentagem: " + (valorPot * 100).toFixed(0) + "%")

},100)