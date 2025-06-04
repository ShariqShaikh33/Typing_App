const router = require("express").Router();
const User = require("../model/user.model.js");

router.get("/",async (req,res)=>{
    try{
        const userList = await User.find();

        res.send(userList);
    }
    catch{
        res.status(500).json({error: "Inter Server Error"});
    }
});

router.get("/:name",async (req,res)=>{
    const name = req.params.name;
    try{
        const userName = await User.find({userName: name});
        if(!userName){
            return res.status(404).json({error: "User Not Found"});
        }
        res.json(userName);
    }
    catch{
        res.status(500).json();
    }
});

module.exports = router;
