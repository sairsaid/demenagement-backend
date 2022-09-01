import express from "express"
import { addArticle, addComment, afficheArticle, displayComment, uploadFile } from "../controllers/articles.js"
import { protect } from "../controllers/protect.js"


const articleRoute=express.Router()

articleRoute.route("/newArticle").post(addArticle)
articleRoute.route("/display").get(afficheArticle)
articleRoute.route("/upload").post(uploadFile)
articleRoute.route("/addComment/:id").post(addComment)
articleRoute.route("/displayComment/:id").get(displayComment)
articleRoute.route("/display/:id").get(afficheArticle)





export default articleRoute