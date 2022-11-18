const mongoose = require("mongoose");

const MedSchema = new mongoose.Schema({
    medName:{
        type: String,
       
    },
    expiryDays:{
        type: String,
        
    },
    /*district:{
        type:string,
        
    }, */

});

const MedData = mongoose.model("MedData",MedSchema)
module.exports = MedData;