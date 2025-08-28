import express, { Request, Response } from "express";
import expressSession from "express-session";
import { router } from "./app/routes";

const app = express();

app.use(
  expressSession({
    secret: "Your secreet",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome To Parcel Delivery Backend",
  });
});

// app.use(globalErrorHandler);
// app.use(notFoundHandler);

export default app;
