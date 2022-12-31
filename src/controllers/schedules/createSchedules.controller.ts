import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import { IUser } from "../../interfaces/users";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";

export const createSchedulesController = async (
  req: Request,
  res: Response
) => {
  const schedulesData: IScheduleRequest = req.body;
  const userId: string = req.user.id;
  const newSchedule = await createSchedulesService(schedulesData, userId);
  return res.status(201).json(newSchedule);
};
