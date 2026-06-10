const LED = 25;

const WIFI_SSID = "WIFI_IOT"
pinMode(LED, "output");
let wifi = require ("Wifi");
wifi.connect(WIFI_SSID)

wifi.on("connected", function(){
    console.log("ESP32 conectado ao Wi-Fi")
    console.log("Meu IP: " + wifi.getIP().ip)
})

wifi.on("disconnected", function(){
    console.log("O Wifi caiu :( ... Conectando novamente...")
    wifi.connect(WIFI_SSID)
})

let http = require("http")
let storage = require("Storage")

http.createServer(function(req, res){
    let url = req.url;
    let file = '';
    let status = 0
    let header

    switch(url){
        case "/":
            file = storage.read("index.html");
            header = {"Content-Type" : "text/html"}
            status = 200
            break;

        case "/styles.css":
            file = storage.read("styles.css");
            header = {"Content-Type" : "text/css"}
            status = 200
            break;

        case "/script.js":
            file = storage.read("script.js");
            header = {"Content-Type" : "application/javascript"}
            status = 200
            break;

        case "/on":
            status = 200
            digitalWrite(LED, 1)
            break;
        
        case "/off":
            status = 200
            digitalWrite(LED, 0)
            break;
        
    }

    
    res.writeHead(status, header);
    res.end(file)
}).listen(80);