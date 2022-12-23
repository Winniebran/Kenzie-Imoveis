import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";

export const deleteUsersService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const [foundUser] = await userRepository.find({where: { id: id }, withDeleted:true});

  if(!foundUser){
    throw new AppError("User not found", 404)
  }

  if (!foundUser?.isActive) {
    throw new AppError("User is already inactive", 400);
  }

  await userRepository.softRemove(foundUser!);
  const user = await userRepository.save({ ...foundUser, isActive: false });

  return user;
};
