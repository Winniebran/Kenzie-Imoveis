import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { listUsersWithoutPassword } from "../../schemas/createUsers.schema";

export const listUsersService = async (): Promise<IUser[] | undefined> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({withDeleted: true});
  const userWithoutPassword = await listUsersWithoutPassword.validate(users, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
