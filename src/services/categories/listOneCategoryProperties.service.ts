import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppErrors";

export const listOneCategoryService = async (categoryId: string): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOne({
    where: { id: categoryId },
    relations: { properties: true },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
