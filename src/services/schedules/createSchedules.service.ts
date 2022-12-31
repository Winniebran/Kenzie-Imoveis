import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IScheduleRequest } from "../../interfaces/schedules";

export const createSchedulesService = async (
  schedulesData: IScheduleRequest,
  userId: string
) => {
  const hour = schedulesData.hour.split(":");
  if (+hour[0] < 8 || +hour[0] > 18 || (+hour[0] === 18 && +hour[1] !== 0o0)) {
    throw new AppError("Hour not allowed", 400);
  }

  const date = schedulesData.date.split("/");
  if (date[2] > "12") {
    throw new AppError("Date not allowed", 400);
  }

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  const propertyRepository = AppDataSource.getRepository(Properties);
  const propertyExists = await propertyRepository.findOneBy({
    id: schedulesData.propertyId,
  });
  if (!propertyExists) {
    throw new AppError("Property not found", 404);
  }

  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const scheduleAlreadyExistsInTheProperty = await scheduleRepository
    .createQueryBuilder("schedules")
    .innerJoinAndSelect("schedules.property", "schedules_property")
    .where("schedules.date = :date", { date: schedulesData.date })
    .andWhere("schedules.hour = :hour", { hour: schedulesData.hour })
    .andWhere("schedules_property.id = :id", { id: schedulesData.propertyId })
    .getOne();

  if (scheduleAlreadyExistsInTheProperty) {
    throw new AppError("Property already has a schedule", 409);
  }

  const notAllowTwoSchedulesOnTheSameProperty = await scheduleRepository
    .createQueryBuilder("schedules")
    .innerJoinAndSelect("schedules.property", "schedules_property")
    .innerJoinAndSelect("schedules.user", "schedules_user")
    .where("schedules_user.id = :id", { id: userId })
    .andWhere("schedules.date = :date", { date: schedulesData.date })
    .andWhere("schedules.hour = :hour", { hour: schedulesData.hour })
    .getOne();

  if(notAllowTwoSchedulesOnTheSameProperty){
    throw new AppError("User already has a schedule for that date and time", 409);
  }

  const schedule = scheduleRepository.create({
    ...schedulesData,
    user: user!,
    property: propertyExists,
  });
  await scheduleRepository.save(schedule);
  return { message: "Schedule created" };
};
