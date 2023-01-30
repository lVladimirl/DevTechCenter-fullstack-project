import { Router } from "express";
import { Request, Response } from "express";
// import { authTokenMiddleware } from "../../middlewares/authToken.middleware";

const user = Router();

const userRouter = () => {
  user.get("/",(req: Request, res: Response) => {
    res.status(200).json({
      message: "user Route",
    });
  });

  return user;
};

export default userRouter;