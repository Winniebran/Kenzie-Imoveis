import { Request, Response, NextFunction } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppErrors";

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: req.user.id });
  if (!user?.isAdm) {
    throw new AppError("Missing admin permissions.", 403);
  }

  return next();
};
