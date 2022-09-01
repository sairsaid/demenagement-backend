import asyncHandler from "express-async-handler";
import multer from "multer";
import Article from "../models/chaufeurModel.js";


const afficheArticle=asyncHandler(async(req,res)=>{
    const articles=await Article.find()
    res.json({chaufeur:articles})
})

const addArticle=asyncHandler(async(req,res)=>{
    const articles=new Article({
        name:req.body.name,
        lastname:req.body.lastname,
        tel:req.body.tel,
        prix:req.body.prix,
        weight:req.body.weight,
        carModel:req.body.carModel,
        image:req.body.image,
    })
    articles.save()
    res.json('test')
})



const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"img")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    },
    })
    
    const upload=multer({storage:storage}).single("file")
    
    const uploadFile=asyncHandler(async(req,res)=>{
        upload(req,res,(err)=>{
            if(err){
                res.sendStatus(500);  
            }
            res.send(req.file)
        })
    })



const addComment=asyncHandler(async(req,res)=>{
    const articleComment=await Article.findById(req.params.id).populate()
    const comment=req.body.comment
articleComment.comment.push({comment:comment})
articleComment.save()
res.json("comment")
})

 
const displayComment=asyncHandler(async(req,res)=>{
    const comment=await Article.findById(req.params.id)
  
    res.json({comment:comment})
  })


  
export {afficheArticle,addArticle,uploadFile,addComment,displayComment}