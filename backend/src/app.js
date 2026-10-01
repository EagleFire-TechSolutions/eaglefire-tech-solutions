import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";


dotenv.config({
 path: "./.env"
})

const app = express();

app.use(express.json( {limit : "10kb"}));
app.use(express.urlencoded( {extended : true}));
app.use(cookieParser());
app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000",
    Credential : true 
}))

app.get("/" , (req ,res) => {
    res.send("Hello server is running")
});
app.use((req,res,next) => {
    console.log("Global:" ,req.method , req.url);
    next();
} )

// router api
import contactRoute from "./routes/contact.route.js";
app.use("/api/v1",contactRoute);





export  default app;