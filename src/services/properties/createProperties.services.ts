import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/adresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppErrors";
import { IPropertyRequest } from "../../interfaces/properties";

export const createPropertiesService = async (
  propertyData: IPropertyRequest
) => {
  const { address, categoryId } = propertyData;

  const adressRepository = AppDataSource.getRepository(Addresses);
  const createAddress = adressRepository.create(address)
  await adressRepository.save(createAddress)
  
  if (address.state.length > 2) {
    throw new AppError("Invalid State", 400);
  }
  
  if (address.zipCode.length > 8) {
    throw new AppError("Invalid Zip Code", 400);
  }
  
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categoryExists = await categoryRepository.findOneBy({ id: categoryId });
  if (!categoryExists) {
    throw new AppError("Category not found", 404);
  }

  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressExists = await propertyRepository.findOneBy({ address: address });
  if (addressExists) {
    throw new AppError("Address already exists", 409);
  }
  
  const property = propertyRepository.create({...propertyData, category:categoryExists, address: createAddress});
  await propertyRepository.save(property);
  return property;
};
