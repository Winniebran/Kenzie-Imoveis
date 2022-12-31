import { Router } from "express";
import { createCategoriesController } from "../controllers/categories/createCategories.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";
import { listOneCategoryController } from "../controllers/categories/listOneCategoryProperties.controller";
import { AuthMiddleware } from "../middlewares/authentication.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { verifyIdMiddleware } from "../middlewares/verifyId.middleware";

export const categoriesRouter = Router();

categoriesRouter.get("", listCategoriesController);
categoriesRouter.post(
  "",
  AuthMiddleware,
  isAdmMiddleware,
  createCategoriesController
);
categoriesRouter.get("/:id/properties", listOneCategoryController);
