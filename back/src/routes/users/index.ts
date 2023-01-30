import { Router } from "express";
import userCreateController from "../../controllers/users/userCreate.controller";

const user = Router();

const userRouter = () => {
  user.get("/",);
  user.post("/register", userCreateController)

  return user;
};

export default userRouter;