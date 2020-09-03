const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

//IMPORT FROM AUTH JS
const authrouter = require('./Routes/Auth');

//MONGO DB CONNECTION
mongoose.connect('<MONGO CONNECTION CODE>',
    {useUnifiedTopology: true,useNewUrlParser: true}, () =>{
    console.log("DB connected Successfull");
})

//TO MAKE JSON 
app.use(express.json());


app.use('/api',authrouter);


//SERVER UP AND RUNNING

app.listen(3000, ()=>{
    console.log("Server UP and Running!");
})
