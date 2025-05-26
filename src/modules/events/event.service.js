import eventModel from "../../DB/models/event.model.js"
import { asyncHandler } from "../../utilits/error/errorHandling.js"

export const createEvent = asyncHandler(async (req, res, next) => {
  const { name, date, capacity } = req.body

  const event = await eventModel.create({ name, date, capacity })

  return res.status(201).json({
    message: "Event created successfully",event})
})

