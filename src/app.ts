import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { usersRouter } from "./routers/users.route";
import { loginRouter } from "./routers/login.route";
import { handleError } from "./errors/handleError";
import { categoriesRouter } from "./routers/categories.route";
import { propertiesRouter } from "./routers/properties.route";
import { schedulesRouter } from "./routers/schedules.route";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/properties", propertiesRouter);
app.use("/schedules", schedulesRouter);

app.use(handleError);

export default app;
