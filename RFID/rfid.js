SPI2.setup();
let rfid = require("MFRC522.js").connect(SPI2);

// rfid.findCards(function(uuid){
//     console.log(uuid);
// });

setInterval(function(){
    let uuid = rfid.readCard();
    if(uuid != "")
    console.log(uuid)
},100)
