import { Router } from "express";
import { createUsersController } from "../controllers/users/createUsers.controller";
import { deleteUsersController } from "../controllers/users/deleteUsers.controller";
import { listUsersController } from "../controllers/users/listUsers.controller";
import { updateUsersController } from "../controllers/users/updateUsers.controler";
import { AuthMiddleware } from "../middlewares/authentication.middleware";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { validateUpdateMiddleware } from "../middlewares/validateUpdate.middleware";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware";
import {
  createUsersSchema,
  updateUsersSchema,
} from "../schemas/createUsers.schema";

export const usersRouter = Router();

usersRouter.post(
  "",
  dataIsValidMiddleware(createUsersSchema),
  createUsersController
);
usersRouter.get("", AuthMiddleware, isAdmMiddleware, listUsersController);
usersRouter.patch(
  "/:id",
  AuthMiddleware,
  validateUpdateMiddleware,
  dataIsValidMiddleware(updateUsersSchema),
  verifyIdMiddleware,
  isAdmMiddleware,
  updateUsersController
);
usersRouter.delete(
  "/:id",
  verifyIdMiddleware,
  AuthMiddleware,
  isAdmMiddleware,
  deleteUsersController
);
