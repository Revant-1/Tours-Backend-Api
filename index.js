import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from 'cors'; // Import cors package


const app = express()

app.use(cors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

dotenv.config()
//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);

app.use("/api/users", usersRoute);

app.use("/api/hotels", hotelsRoute);

app.use("/api/rooms", roomsRoute);
//error middleware
app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went Wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack,
    })
    next()
})



// Created a Function to Connect to mongodb DATAbase
const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongodb")
  } catch (error) {
    throw error  }
}

mongoose.connection.on("disconnected", ()=>{
    console.log(" Mongodb Disconnected !")
})
mongoose.connection.on("Connected", ()=>{
    console.log(" Mongodb Connected !")
})

app.listen(4040 , ()=>{
    connect()
    console.log("Connected at port 4040")
})