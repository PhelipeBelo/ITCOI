let statusLED = 0;

pinMode(2, "output")
setInterval(function () {
    statusLED = !statusLED
    digitalWrite(2, statusLED)
}, 5)

