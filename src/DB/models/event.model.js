import mongoose from "mongoose"

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "event name is required"],
        minLength: 2,
        maxLength: 50,
        lowercase: true
    },
    date: {
        type: Date,
        required: [true, "event date is required"]
    },
    capacity: {
        type: Number,
        required: [true, "event capacity is required"],
        min: [1, "capacity must be at least 1"]
    }
}, { timestamps: true })

const eventModel = mongoose.models.Event || mongoose.model("Event", eventSchema)

export default eventModel
