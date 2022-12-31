import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppErrors";
import { IUserLogin } from "../../interfaces/users";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });
  if (!user) {
    throw new AppError("Email or password is invalid", 400);
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("Email or password is invalid", 403);
  }


  const token = jwt.sign(
    { email: user.email },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return token;
};
