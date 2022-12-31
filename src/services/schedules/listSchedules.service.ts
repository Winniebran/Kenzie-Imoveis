import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppErrors";

export const listSchedulesService = async (
  propertyId: string
): Promise<Properties> => {
  
  const propertyRepository = AppDataSource.getRepository(Properties);

  const property = await propertyRepository.findOne({
    where: { id: propertyId },
    relations: {
      schedules: {
        user: true,
      },
    },
  });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  return property;
};
