import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
import morgan from "morgan";
import { conn } from "./database/connect";

config();

const app: Application = express();
const maria = conn;
maria.connect();
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from ts app ");
  maria.query("SELECT * FROM users", function (err, rows, field) {
    console.log(rows[0].user_id, field);
    if (!err) {
      // res.send(rows);
    }
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || "500");
  res.send({
    status: err.status || "500",
    message: err.message,
  });
};

app.use(errorHandler);
const PORT: Number = Number(process.env.PORT) || 3000;
const server: Server = app.listen(PORT, () =>
  console.log(`👏 is on Port ${PORT} !`)
);
