import userModel from "../../DB/models/user.model.js";
import { asyncHandler } from "../../utilits/error/errorHandling.js";
import { Hash } from "../../utilits/hashing/hash.js";


export const signUp = asyncHandler(async (req, res, next) => {
    const { name, email, password} = req.body;
    const emailExsit = await userModel.findOne({ email })
    if (emailExsit) {
        return next(new Error("Email already exists", { cause: 409 }))
    }
    const hash = await Hash({ password, SALT_ROUNDS: process.env.SALT_ROUNDS })
    const user = await userModel.create({name, email, password: hash});
    return res.status(200).json({ msg: "user added successfully", user });
})
