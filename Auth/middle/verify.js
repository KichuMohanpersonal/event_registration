const jwt = require("jsonwebtoken");


module.exports =  function verify(req,res,next){
    const token = req.header("Auth-Token");
    if(!token) return res.status(401).send("You are not Authorised");

    try {
        const ver = jwt.verify(token,"hgsfjhagdjgagjdgagh646");
        req.user = ver;
        next();
    } catch (error) {
        res.status(400).send("Invalid Token");
    }



}