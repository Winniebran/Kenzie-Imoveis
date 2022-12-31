import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules/createSchedules.controller";
import { listSchedulesController } from "../controllers/schedules/listSchedules.controller";
import { AuthMiddleware } from "../middlewares/authentication.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

export const schedulesRouter = Router();

schedulesRouter.post("", AuthMiddleware, createSchedulesController);
schedulesRouter.get(
  "/properties/:id",
  AuthMiddleware,
  isAdmMiddleware,
  listSchedulesController
);
