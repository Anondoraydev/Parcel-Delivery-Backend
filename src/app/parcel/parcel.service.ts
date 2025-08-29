import httpStatus from "http-status-codes";
import { AppError } from "../config/errorHelpers/AppError";
import { User } from "../user/user.model";
import { IParcel } from "./parcel.interface";

const createParcelService = async (payload: Partial<IParcel>) => {
  const { sender } = payload;

  const isUserExist = await User.findById(sender);

  if (!isUserExist) {
    throw new AppError(
      httpStatus.CONFLICT,
      "You are not Authorized User to create a parcel"
    );
  }
};

export const ParcelServices = {
  createParcelService,
};
