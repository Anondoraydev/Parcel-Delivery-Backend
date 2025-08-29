import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequestObject } from "../../middlewares/validateRequest";
import { Role } from "../user/user.interface";
import { ParcelControllers } from "./parcel.controller";
import { createParcelZodSchema, updateParcelSchema } from "./parcel.validation";

const router = Router();

router.post(
  "/create",
  checkAuth(Role.SENDER, Role.ADMIN, Role.SUPER_ADMIN),
  validateRequestObject(createParcelZodSchema),
  ParcelControllers.createParcel
);

router.get(
  "/",
  checkAuth(...Object.values(Role)),
  ParcelControllers.getAllParcel
);

router.patch(
  "/:trkId",
  checkAuth(...Object.values(Role)),
  validateRequestObject(updateParcelSchema),
  ParcelControllers.updateParcel
);

export const ParcelRoutes = router;
