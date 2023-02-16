import express from "express";
import { appRoutes } from "./routes";
import { Request, Response } from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";


const app = express();
const cors = require("cors");

app.use(express.json({limit:"50mb"}));
app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.urlencoded({ limit: "50mb", extended: true }));


appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "hello world",
  });
});

app.use(handleErrorMiddleware)

export default app;