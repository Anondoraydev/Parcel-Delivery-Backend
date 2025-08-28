import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log(`Connected to database ${envVars.DB_URL}`);
    server = app.listen(envVars.PORT, () => {
      console.log(`Server running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
//   await seedsuperAdmin();
})();

process.on("unhandledRejection", err => {
  console.log("Unhandled Rejection detected, shutting down...");

  if (server) {
    server.close(() => {
      console.error(err);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", err => {
  console.log("Uncaught Exception detected, shutting down...", err);
  if (server) {
    server.close(() => {
      console.error(err);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on("SIGINT", () => {
  console.log("SIGINT signal reciveed detected .... Server shutting down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
