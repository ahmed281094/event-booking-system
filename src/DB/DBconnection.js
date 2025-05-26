import mongoose from "mongoose"

const DBconnection = ()=>{
    mongoose.connect(process.env.URI_CONNECTION).then(()=>{
        console.log("db connected successfuly")
        
    }).catch((err)=>{
        console.log("connection failed",err);

    })
}

export default DBconnection