//import React,{useEffect} from "react";
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
// require("dotenv").config({ path: "./config.env" });


const MedModel = require("./models/Med");
app.use(cors());
app.use(express.json());
// const port = process.env.PORT || 3001;

/*useEffect( ()=>{
  Axios.post("")

},[])*/

mongoose.connect("mongodb+srv://newuser:newuser@CURD.ym1yaq4.mongodb.net/Medicine?retryWrites=true&w=majority",{
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));




app.post("/insert", async (req,res)=>{
    console.log("hai")
    const medName1 = req.body.medName;
    const expiryDays1= req.body.expiryDays;
    //const district1= req.body.district;

    const med= new MedModel({medName: medName1, expiryDays: expiryDays1});

    try{
        await med.save();
        res.send("inserted data");
        console.log("inserted")
    } catch(err){
        console.log(err)
    }

});

app.get("/read", async (req,res)=>{
  MedModel.find({},(err,result)=>{
    if(err){
      res.send(err );
    }

    res.send(result);
  }); 

});


app.delete("/delete/:id", async(req,res)=>{
  const id = req.params.id;

  await MedModel.findByIdAndRemove(id).exec();
  res.send('delete');
});


app.listen(3001,() => {
  console.log("Server started")
});



/*app.get("/delete", async(req,res)=>{

  const medName=req.body.medName;
  const expiryDays=req.body.expiryDays;
  const result =await MedModel.findOneAndDelete({$and: [{medName:medName},{expiryDays:expiryDays}]});
  console.log("delete");
  res.end();
});*/