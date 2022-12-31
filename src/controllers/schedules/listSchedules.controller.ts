import { Request, Response } from "express";
import { listSchedulesService } from "../../services/schedules/listSchedules.service";


export const listSchedulesController = async (
  req: Request,
  res: Response
) => {
  const propertyId: string = req.params.id;
  const listProperties = await listSchedulesService(propertyId);
  return res.json(listProperties);
};