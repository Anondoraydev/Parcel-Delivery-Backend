import { Types } from "mongoose";

export enum EStatus {
  REQUESTED = "REQUESTED",
  APPROVED = "APPROVED",
  PICKED = "PICKED",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

export enum EPackageType {
  DOCUMENT = "DOCUMENT",
  PACKAGE = "PACKAGE",
  FRAGILE = "FRAGILE",
}

export interface IStatusLog {
  status: EStatus;
  note?: string;
  createdAt: Date;
}

export interface IPackageDetails {
  type: EPackageType;
  weight: number;
  description?: string;
}

export interface IReceiverInfo {
  name: string;
  phone: string;
  address: string;
  email: string;
}

export interface IParcel {
  _id: string;
  trackingId: string;
  sender: Types.ObjectId;
  receiver: IReceiverInfo;
  packageDetails: IPackageDetails;
  fee: number;
  currentStatus: EStatus;
  statusLog: IStatusLog[];
  isBlocked: boolean;
  expectedDeliveryDate?: Date;
  actualDeliveryDate?: Date;
  isNew?: boolean;
}

export interface IMongoUpdate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $set?: Record<string, any>;
  $push?: { statusLog?: IStatusLog };
}
