import { envVars } from "../config/env";

const globalErrorHandler = (err: any, req: any, res: any, next: any) => {
    if (envVars.NODE_ENV === "development") {
         console.log(err);
    }
  
};