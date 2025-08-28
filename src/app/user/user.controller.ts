import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../utils/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUserService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User Created Successfully",
    data: result,
  });
});
