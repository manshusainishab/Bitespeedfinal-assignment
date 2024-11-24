require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const identifyContact = require('./main');



const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5005;

app.post('/identify', identifyContact);

app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    return res.status(200);
})