import express from "express";
import cors from "cors"
const app = express()
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./Routes/RouteUser.js";
import articleRoute from "./Routes/RouteArticle.js";




const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://samir:08888768@cluster0.u5jqr.mongodb.net/newData?retryWrites=true&w=majority")
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
   }

   connectDB()

   app.use("/img",express.static("img"))
   app.use(cors())
   app.use(bodyParser.json())
   app.use(bodyParser.urlencoded({extended:true}))
   app.use(express.json())
   app.use("/api",userRoute)
   app.use("/api",articleRoute)






   const port=5000
   app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
   })