import joi from "joi"
import { generalRules } from "../../utilits/generalRules/index.js"


export const createBookingSchema = {
  params: joi.object({
    userId: generalRules.objectId.required(),
    eventId: generalRules.objectId.required()
  })
}

export const getBookingsByEventSchema = {
  params: joi.object({
    id: generalRules.objectId.required()
  })
}

export const getEventsByUserSchema = {
  params: joi.object({
    id: generalRules.objectId.required()
  })
}
