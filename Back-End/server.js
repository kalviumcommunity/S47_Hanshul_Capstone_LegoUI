const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors');
const PORT =500;
const ConnectToDB = require('./db');

ConnectToDB()


app.use(cors(
    {
        origin: "http://localhost:3000",
        method : "GET, POST, PUT, DELETE",
        credentials: true
    }
))
app.use(express.json());

app.get("/",(req, res) => {
    res.status(200).json("Server is running");
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})