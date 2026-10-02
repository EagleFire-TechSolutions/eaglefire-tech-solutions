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
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on PORT ${PORT}`);
});