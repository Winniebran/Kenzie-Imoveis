import { IUserLogin } from "../../interfaces/users";
import { loginService } from "../../services/session/login.service";
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const loginData: IUserLogin = req.body;
  const token = await loginService(loginData);
  return res.json({token});
};
