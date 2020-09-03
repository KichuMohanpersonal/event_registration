const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const auth = require('../middle/verify');

//IMPORT SCHEMA
const User = require('../model/User');
const Events = require('../model/event');


//FINDING SIMILAR EMAIL
const { findOne } = require("../model/User");

routes.post('/register', async (req , res)=>{

    //Checking if email is already present
        const EmailExist = await User.findOne({email:req.body.email});
        if(EmailExist){
            return res.status(400).send("Email Already Exist");
        }


    //HASHING THE PASSORD

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPass,
        phone:req.body.phone
    })
    try{
        const savedUser = await user.save();
        const events = new Events({
            id:user.id,
        });
        
         const savedEvents = await events.save();
        res.send("Done");


    } catch(error){
        res.status(400).send("ERROR");
    }
    
})


//For login

routes.post('/login', async (req,res)=>{
    //First We check email is present or not then compare it with the password
    const emailVerification = await User.findOne({email:req.body.email});
    if(!emailVerification){
       return  res.status(400).send("Email Doesnt Exist");

    }
    const passVerification = await bcrypt.compare(req.body.password, emailVerification.password);
    if(!passVerification){
        return res.status(400).send("Password Incorrect");
    }

    const token = jwt.sign({_id:emailVerification.id},<YOUR CODE>);
    res.header("Auth-Token",token).send(token);
    

})
//After Login display registered Events

routes.get("/profile",auth, async (req,res)=>{
    // res.send(req.user);

    const verifyUser = await Events.findOne({id:req.user._id});
    if(!verifyUser) return res.status(400).send("Error occured");

    res.send(verifyUser);
})


//After Login changing registered Events

    routes.post('/submitchange',async (req,res)=>{
        const eupdateuser = Events.findOne({id:req.body.user});
        
        const eventt = new Events({
            id:req.body.user,
            dance:req.body.dance,
            music:req.body.music,
            chess:req.body.chess,
            carroms:req.body.carroms,
            hipop:req.body.hipop,
        })
        try {
            await eupdateuser.remove()
            const savedevnts = await eventt.save();
            // const savedevnts = await eventt.update({_id:eupdateuser.id},{$set:obj});
            console.log(req.body)
            
        } catch (error) {
            res.status(500).send("Unexpected Error");
            console.log(error);
        }
    })


module.exports = routes;