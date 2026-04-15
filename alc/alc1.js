I2C1.setup();

let mpu = require('MPU6050').connect(I2C1);

setInterval(function()
{
    let acc = mpu.getGravity();
    let gyro = mpu.getDegreesPerSecond();
    let temp = mpu.getTemperature();

    /*
    Serial1.print(">");
    Serial1.print("ax:" + acc[0].toFixed(2) + ",")
    Serial1.print("ay:" + acc[1].toFixed(2) + ",")
    Serial1.print("az:" + acc[2].toFixed(2) + "\r\n")
    */
    Serial1.print(">");
    Serial1.print("gx:" + gyro[0].toFixed(2) + ",")
    Serial1.print("gy:" + gyro[1].toFixed(2) + ",")
    Serial1.print("gz:" + gyro[2].toFixed(2) + "\r\n")
    

}, 50);