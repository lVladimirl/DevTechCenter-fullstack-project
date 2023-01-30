import express from "express";
import { appRoutes } from "./routes";
import { Request, Response } from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";


const app = express();

const cors = require("cors");

app.use(
  cors({ origin: ["hhttp://localhost:3000/", "http://localhost:3001/"] })
);

app.use(express.json());

appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.use(handleErrorMiddleware)

export default app;
