import mongoose from "mongoose";

const commentSchema=mongoose.Schema({
    comment:{
        type:String,
        required:true,
    }
})




const chaufeurSchema=mongoose.Schema(
{
name:{
    type:String,
    required:true,
},
lastname:{
    type:String,
    required:false,
},
tel:{
    type:Number,
    required:true,
},

comment:[commentSchema],
rating:{
    type:String,
    required:false,
},

prix:{
    type:Number,
    required:true,
    default:0,
},
carModel:{
    type:String,
required:true,
},
weight:{
    type:Number,
    required:true,
    default:0,
},
image:{
    type:String,
    required:true,
}
}
)
const Article = mongoose.model('Article', chaufeurSchema)

export default Article
