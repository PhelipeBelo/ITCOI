const DHT11_PIN = 32;

let dht = require("dht11.js").connect(DHT11_PIN);

setInterval(function () {
    let temperatura = dht.readTemperature();
    let umidade = dht.readHumidity()


console.log("Tempo.: " + temperatura.toFixed(0) + ".C");
console.log("Umid.: " + umidade.toFixed(0) + "%\n");

}, 1000);