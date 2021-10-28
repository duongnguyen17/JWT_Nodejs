import dotenv from 'dotenv';
import Express from "express";
import { getTokenController, verifyTokenController } from "./src/controller/token.js";
dotenv.config()
const app = Express()
//
app.use(Express.json({ type: "application/json", }))
app.post("/get_token", getTokenController)
app.post("/verify_token", verifyTokenController)

app.listen(3000, () => {
    console.log('server is running.')
})