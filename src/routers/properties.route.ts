
import { Router } from "express";
import { createPropertiesController } from "../controllers/properties/createProperties.controller";
import { listPropertiesController } from "../controllers/properties/listProperties.controller";
import { AuthMiddleware } from "../middlewares/authentication.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";

export const propertiesRouter = Router();

propertiesRouter.post("", AuthMiddleware, isAdmMiddleware, createPropertiesController);
propertiesRouter.get("", listPropertiesController);