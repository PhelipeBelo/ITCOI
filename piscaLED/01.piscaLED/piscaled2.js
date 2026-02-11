const LED = 2;

pinMode(LED, "output")

function piscaled() {
    digitalWrite(LED, 1)
    setTimeout(function () {
        digitalWrite(LED, 0)
        setTimeout(piscaled, 500)
    }, 500)
}

piscaled()


