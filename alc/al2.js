I2C1.setup();

let mpu = require('MPU6050').connect(I2C1);

setInterval(function()
{
    let acc = mpu.getGravity();
    let angx = Math.atan(acc[0]/acc[2])*180/Math.PI;
    let angy = Math.atan(acc[1]/acc[2])*180/Math.PI;

    console.log("Angulo X: " + angx.toFixed(0));
    console.log("Angulo X: " + angy.toFixed(0));
    console.log();

}, 500);