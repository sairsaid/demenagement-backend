import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import  jwt  from "jsonwebtoken";

function generateToken(id) {
    return jwt.sign({ id }, "forum3wa", {
      expiresIn: "30d",
    });
  }
  

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password,tel,lastname,address } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
      name,
      lastname,
      email,
      password,
      address,
      tel
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        lastname:user.lastname,
        email: user.email,
        address:user.address,
       tel:user.tel,
              // isAdmin: user.isAdmin,
       
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });


  
  const logUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        lastname:user.lastname,
        email: user.email,
        address:user.address,
        tel:user.tel,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  });

  export{registerUser,logUser}