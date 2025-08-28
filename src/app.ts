import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import expressSession from "express-session";
import { router } from "./app/routes";

const app = express();

app.use(
  expressSession({
    secret: "Your secreet",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Parcel Delivery System backend",
  });
});

// app.use(globalErrorHandler);
// app.use(notFound);

export default app;
