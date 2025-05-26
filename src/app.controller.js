import DBconnection from "./DB/DBconnection.js"
import { globalErrorHandling } from "./utilits/error/errorHandling.js"
import userRouter from "./modules/users/user.controller.js"
import eventRouter from "./modules/events/event.controller.js"
import bookingRouter from "./modules/booking/booking.controller.js"
const bootstrap = (app,express)=>{
    app.use(express.json())
    DBconnection()
    app.use("/users", userRouter)
    app.use("/events", eventRouter)
    app.use("/booking", bookingRouter)
    app.use("*",(req,res,next)=>{
        return next(new Error(`url not found ${req.originalUrl}`))
    })
    app.use(globalErrorHandling)
}

export default bootstrap