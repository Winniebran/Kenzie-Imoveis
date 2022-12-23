import { Router } from "express";
import { loginController } from "../controllers/session/login.controller";

export const loginRouter = Router();

loginRouter.post("", loginController);
