const express=require('express');
const router=express.Router();
const prisma=require('../prisma');

router.post('/',async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await prisma.user.create({
            data:{name,email,password},
        });
        res.json(user);
    }catch(error){
        res.status(400).json({ error: error.message `User cant be created`});
    }
});

router.get('/',async(req,res)){
    const 
}