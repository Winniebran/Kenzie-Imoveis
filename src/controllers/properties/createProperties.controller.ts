import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { createPropertiesService } from "../../services/properties/createProperties.services";

export const createPropertiesController = async (
  req: Request,
  res: Response
) => {
  const propertyData: IPropertyRequest = req.body;
  const newProperty = await createPropertiesService(propertyData);
  return res.status(201).json(newProperty);
};
