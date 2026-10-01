import express from "express";
import app from "./app.js";

import dbconnection from "../src/db/index.js";

 dbconnection()
 .then(() => {
    console.log("DB is connected");
    
 })
 .catch((err) => {
    console.log(err);
    
 });

const PORT = process.env.PORT || 5000;
app.listen(5000 || process.env.PORT  ,(req , res)=> {
    console.log("Server is running on PORT 5000");
    
});