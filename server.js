require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const identifyContact = require('./main');



const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5005;

app.post('/identify', identifyContact);

app.get('/',(req,res)=>{
    return res.status(200).json({message: "started"});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})