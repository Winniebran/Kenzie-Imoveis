import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppErrors";
import { ICategoryRequest } from "../../interfaces/categories";

export const createCategoriesService = async (
  categoryData: ICategoryRequest
): Promise<Categories> => {
  const { name } = categoryData;
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryExists = await categoryRepository.findOneBy({
    name: name,
  });
  if (!categoryExists) {
    const category = categoryRepository.create(categoryData);
    await categoryRepository.save(category);
    return category;
  }

  throw new AppError("Category already exists", 409)
};
