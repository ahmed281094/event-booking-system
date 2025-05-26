import joi from 'joi';
import { generalRules } from '../../utilits/generalRules/index.js';

export const signUpSchema = {
    body: joi.object({
        name: joi.string().alphanum().min(2).max(10).required(),
        email: generalRules.email.required(),
        password: generalRules.password.required(),
        rePassword: joi.string().valid(joi.ref('password')).required(),
        id: generalRules.objectId
    }).required()
}