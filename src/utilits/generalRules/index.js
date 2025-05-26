import { Types } from "mongoose"
import joi from 'joi';

export const idValidation = (value, helpers) => {
    let isValidId = Types.ObjectId.isValid(value);
    return isValidId ? value : helpers.error("any.invalid");
}
export const generalRules = {
    email: joi.string().email(),
    password: joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    objectId: joi.string().custom(idValidation, "ObjectId Validation").messages({
        "any.invalid": "Invalid ObjectId"
      }),
}