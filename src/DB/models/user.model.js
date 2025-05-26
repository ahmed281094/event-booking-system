import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: 2,
        maxLength: 10,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: 6,

    },


},
{timeseries:true}
)

const userModel = mongoose.models.User || mongoose.model("User",userSchema)

export default userModel