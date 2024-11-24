require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const identifyContact = require('./main');



const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5002;

app.post('/identify', identifyContact);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    return res.status(200);
})