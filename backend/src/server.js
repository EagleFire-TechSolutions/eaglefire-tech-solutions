import express from "express";
import "dotenv/config";

import app from "./app.js";
import dbconnection from "./db/index.js";

const PORT = process.env.PORT || 4000;

console.log("ABASTHAN PORT:", process.env.PORT);
console.log("USING PORT:", PORT);

dbconnection()
.then(()=>{
    console.log("DB connected");
    
})
.catch((err)=>{
    console.log(err);
    
});

app.listen(4000, "127.0.0.1", () => {
    console.log(`Server is running on PORT ${PORT}`);
});