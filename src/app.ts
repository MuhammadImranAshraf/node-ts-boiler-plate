import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import xss from "xss";
import AppError from "utils/AppError";
import globalErrorHandler from "utils/globalErrorHandler";
import v1Routes from "@v1Routes/v1Routes";
const app = express();

// app.use(xss());
app.use([
  helmet(),
  morgan("dev"),
  bodyParser.urlencoded({ extended: true }),
  express.json(),
  cors({
    optionsSuccessStatus: 200,
    origin: "*",
  }),
]);

app.use("/api/v1", v1Routes);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError("Sorry! API Route not found", 400));
});

app.use(globalErrorHandler);

export default app;
