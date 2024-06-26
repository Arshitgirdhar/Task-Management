require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mongoUrl = "mongodb+srv://yashikagulati:123@cluster0.rqdx7y6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl);


const app = express();
const db = mongoose.connection;
app.use(cors());
app.use(express.json());
db.on("error",(err)=>console.log(err));
db.on("open",()=>console.log("DATABASE CONNECTED"));

const tasRouter = require("./routes/tasks");
app.use("/api/tasks",tasRouter)





app.listen(process.env.PORT,()=>console.log(`server is listening at port ${process.env.PORT}`));