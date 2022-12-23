import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordSchema } from "../../schemas/createUsers.schema";
import { AppError } from "../../errors/AppErrors";

export const createUsersService = async (
  userData: IUserRequest
): Promise<IUser> => {
  const { email } = userData;
  const userRepository = AppDataSource.getRepository(User);

  const emailExist = await userRepository.findOneBy({ email: email });

  if (!emailExist) {
    const user = userRepository.create(userData);
    await userRepository.save(user);
    const userWithoutPassword = await userWithoutPasswordSchema.validate(user, {
      stripUnknown: true,
    });

    return userWithoutPassword;
  }

  throw new AppError("Email already exists", 409);
};
