const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const paraRouter = require("./routes/para.route");
const userRouter = require("./routes/user.route");

app.use(cors({origin: "https://typing-app-virid.vercel.app/"}));

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("Home");
})

app.use(express.json());
app.use("/api",paraRouter);
app.use("/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server connected to port ${process.env.PORT}`);
})
