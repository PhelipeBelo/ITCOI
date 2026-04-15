I2C1.setup();

let mpu = require('MPU6050').connect(I2C1);

setInterval(function()
{
    let acc = mpu.getGravity();
    let gyro = mpu.getDegreesPerSecond();
    let temp = mpu.getTemperature();

    console.log("Ax:" + acc[0].toFixed(2) + " Ay:" + acc[1].toFixed(2) + " Az:" + acc[2].toFixed(2));
    console.log("Gx:" + gyro[0].toFixed(2) + " Gy:" + gyro[1].toFixed(2) + " Gz:" + gyro[2].toFixed(2));
    console.log("Temp.: " + temp.toFixed(2) + ".C\n");

}, 500);