import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

export const createPropertiesSchema: SchemaOf<
  IPropertyRequest | IAddressRequest
> = yup.object().shape({
  id: yup.string().uuid().required(),
  value: yup.number().required("Value is required"),
  size: yup.number().required("Size is required"),
  categoryId: yup.string().uuid().required(),
  sold: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  address: yup.object().shape({
    id: yup.string().uuid().required(),
    district: yup.string().trim().required("District is required"),
    zipCode: yup
      .string()
      .trim()
      .max(8, "Zip Code must contain 8 digits")
      .required("Zip Code is required"),
    number: yup.string().trim(),
    city: yup.string().trim().required("City is required"),
    state: yup
      .string()
      .trim()
      .max(2, "State must contain 2 digits")
      .required("State is required"),
  }),
});
