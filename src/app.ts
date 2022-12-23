import express from "express"
import "express-async-errors"
import "reflect-metadata"
import { usersRouter } from "./routers/users.route";
import { loginRouter } from "./routers/login.route";
import { handleError } from "./errors/handleError";


const app = express()

app.use(express.json())
app.use("/users", usersRouter);
app.use("/login", loginRouter)

app.use(handleError)

export default app