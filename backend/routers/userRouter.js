import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router(); //express.Router() is a function

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
      // await User.remove({}); // To remove Users from database
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post('/signin')

export default userRouter;
