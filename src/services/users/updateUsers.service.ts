import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { userWithoutPasswordSchema } from "../../schemas/createUsers.schema";

export const updateUsersService = async (
  id: string,
  update: IUserUpdate
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const [foundUser] = await userRepository.find({
    where: { id: id },
    withDeleted: true });
  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = userRepository.create({
    ...foundUser,
    ...update,
  });
  await userRepository.save(updatedUser);

  const updateWithoutPassword = await userWithoutPasswordSchema.validate(
    updatedUser,
    { stripUnknown: true }
  );

  return updateWithoutPassword;
};
