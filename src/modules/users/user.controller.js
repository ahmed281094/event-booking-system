import { Router } from "express";
import { signUp } from "./user.service.js";
import { signUpSchema } from "./user.validation.js";
import { validation } from "../../middleWare/validation.js";



const userRouter = Router()

userRouter.post("/signUp", validation(signUpSchema), signUp)

export default userRouter