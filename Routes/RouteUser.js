import express from "express"
import { logUser, registerUser} from "../controllers/users.js"
const userRoute=express.Router()

userRoute.route("/register").post(registerUser)
userRoute.route("/log").post(logUser)



export default userRoute 