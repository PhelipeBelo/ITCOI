const POT = 32

setInterval(function(){
    let valorPot = analogRead(POT)
    console.log("Valor do Pot: " + (valorPot * 100).toFixed(0))

    let angulo = 270*valorPot;
    console.log("Angulo: " + angulo.toFixed(0) + "\n");
}, 2000)