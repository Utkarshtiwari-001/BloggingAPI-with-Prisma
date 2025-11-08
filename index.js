const express = require('express')
const app= express()
const { PrismaClient } = require("@prisma/client")

app.use(express.json())
const prisma=new PrismaClient()
const PORT =process.env.PORT || 5000

app.get("/",(_,res)=>{
    res.json({message: "Blog API is running"})
});

app.listen(PORT,()=>{
    console.log(`APP is listening on ${PORT}`);
});