const POT = 32

setInterval(function(){
    console.log("Valor do Pot" , analogRead(POT))
}, 500)