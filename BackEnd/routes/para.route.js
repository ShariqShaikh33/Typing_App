const router = require("express").Router();
const Paragraph = require("../model/para.model");

router.get("/",async (req,res)=>{
    try{
        const para = await Paragraph.find();
        res.send(para);
    }
    catch{
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.post("/post",async (req,res)=>{
    try{
        res.send(req.body);
    }
    catch{

    }
})

router.get("/id/:id",async(req,res)=>{
    const id = req.params.id;
    
    try{
        const para = await Paragraph.find({id:id});

        if(!para){
            return res.status(404).json({error: "File not found"});
        }
        res.json(para);
    }
    catch{
        res.status(500).json();
    }
})

module.exports=router;