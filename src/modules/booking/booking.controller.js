import { Router } from "express"
import { createBooking,getBookingsByEvent, getEventsByUser } from "./booking.service.js"
import { validation } from "../../middleWare/validation.js"
import { createBookingSchema,getBookingsByEventSchema, getEventsByUserSchema } from "./booking.validation.js"

const bookingRouter = Router()

bookingRouter.post("/:userId/:eventId", validation(createBookingSchema), createBooking)
bookingRouter.get("/event/:id", validation(getBookingsByEventSchema), getBookingsByEvent)
bookingRouter.get("/user/:id", validation(getEventsByUserSchema), getEventsByUser)
export default bookingRouter
