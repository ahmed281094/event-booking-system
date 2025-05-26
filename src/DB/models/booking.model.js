import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "userId is required"]
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: [true, "eventId is required"]
    }
}, { timestamps: true })

const bookingModel = mongoose.models.Booking || mongoose.model("Booking", bookingSchema)

export default bookingModel
