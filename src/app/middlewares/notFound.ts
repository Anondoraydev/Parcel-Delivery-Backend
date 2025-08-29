import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(httpStatus.NOT_FOUND)
    .json({ success: true, message: "Route not found" });
};
export default notFound;
