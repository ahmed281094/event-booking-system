import bookingModel from "../../DB/models/booking.model.js"
import userModel from "../../DB/models/user.model.js"
import eventModel from "../../DB/models/event.model.js"
import { asyncHandler } from "../../utilits/error/errorHandling.js"

export const createBooking = asyncHandler(async (req, res, next) => {
  const { userId, eventId } = req.params

  const user = await userModel.findById(userId)
  if (!user) return next(new Error("User not found", { cause: 404 }))

  const event = await eventModel.findById(eventId)
  if (!event) return next(new Error("Event not found", { cause: 404 }))

  const existingBooking = await bookingModel.findOne({ userId, eventId })
  if (existingBooking) {
    return next(new Error("User already booked this event", { cause: 400 }))
  }
  // const bookingCount = await bookingModel.find({eventId})
  // if (bookingCount.length >= event.capacity) {
  //   return next(new Error("Event is fully booked", { cause: 400 }))
  // }
  const bookingCount = await bookingModel.countDocuments({ eventId })
  if (bookingCount >= event.capacity) {
    return next(new Error("Event is fully booked", { cause: 400 }))
  }
  const booking = await bookingModel.create({ userId, eventId })

  return res.status(201).json({ message: "Booking successful", booking })
})


export const getBookingsByEvent = asyncHandler(async (req, res, next) => {
  const { id: eventId } = req.params
  const page = parseInt(req.query.page) || 1
  const limit = 2
  const skip = (page - 1) * limit
  const bookings = await bookingModel.find({ eventId }).populate("userId", "name email").limit(limit).skip(skip)

  return res.status(200).json({
    message: `Found ${bookings.length} bookings for this event`,
    bookings
  })
})



export const getEventsByUser = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.params
  const page = parseInt(req.query.page) || 1
  const limit = 2
  const skip = (page - 1) * limit
  const bookings = await bookingModel
    .find({ userId })
    .populate("eventId", "name date capacity").limit(limit).skip(skip)

  return res.status(200).json({
    message: `Found ${bookings.length} events booked by user`,
    bookings
  })
})
