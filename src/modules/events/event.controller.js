import { Router } from "express"
import { createEvent } from "./event.service.js"
import { validation } from "../../middleWare/validation.js"
import { createEventSchema } from "./event.validation.js"

const eventRouter = Router();

eventRouter.post("/", validation(createEventSchema), createEvent)

export default eventRouter
