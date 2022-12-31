import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import { createCategoriesService } from "../../services/categories/createCategories.services";

export const createCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categoryData: ICategoryRequest = req.body;
  const newCategory = await createCategoriesService(categoryData);
  return res.status(201).json(newCategory);
};
