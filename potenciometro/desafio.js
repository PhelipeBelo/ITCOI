const POT = 32;
const LEDVM= 25;
const LEDAM = 26;
const LEDVD = 27;

setInterval(function(){
    let valorPot = analogRead(POT);
    let valorPerc = (valorPot*100).toFixed(0)
    console.log("Valor do Pot: " + valorPerc);
    
    let angulo = 270*valorPot;
    console.log("Angulo: " + angulo.toFixed(0) + "\n" );

    if(valorPerc <= 30)
    {
        digitalWrite(LEDVM, 1);
        digitalWrite(LEDAM, 0);
        digitalWrite(LEDVD, 0);
    }

    if(valorPerc > 30 & valorPerc <= 70)
    {
        digitalWrite(LEDVM, 0);
        digitalWrite(LEDAM, 1);
        digitalWrite(LEDVD, 0);
    }

    if(valorPerc > 70)
    {
        digitalWrite(LEDVM, 0);
        digitalWrite(LEDAM, 0);
        digitalWrite(LEDVD, 1);
    }
}, 500);