import { Request, Response } from "express";
import { listOneCategoryService } from "../../services/categories/listOneCategoryProperties.service";

export const listOneCategoryController = async (
  req: Request,
  res: Response
) => {
  const categoryId: string = req.params.id;
  const listProperties = await listOneCategoryService(categoryId);
  return res.json(listProperties);
};
