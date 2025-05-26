import dotenv from "dotenv"
import path from "path"
import express from "express"
dotenv.config({path:path.resolve("src/config/.env")})

import bootstrap from "./src/app.controller.js"
const app = express()
const port = process.env.PORT 
bootstrap(app,express)
app.listen(port,()=>{console.log(`app is listening on port ${port}`);
})

console.log("PORT:", process.env.PORT);