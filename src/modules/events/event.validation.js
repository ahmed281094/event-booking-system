import joi from "joi";
import { generalRules } from "../../utilits/generalRules/index.js";

export const createEventSchema = {
  body: joi.object({
    name: joi.string().min(2).max(50).required(),
    date: joi.date().greater("now").required(),
    capacity: joi.number().min(1).required(),
    id: generalRules.objectId
  })
}
