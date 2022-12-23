import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import { createUsersService } from "../../services/users/createUsers.service";

export const createUsersController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const data = await createUsersService(userData);
  return res.status(201).json(data);
};
