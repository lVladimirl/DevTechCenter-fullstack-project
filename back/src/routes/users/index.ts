import { Router } from "express";
import { createLoginController } from "../../controllers/users/loginCreate.controller";
import userCreateController from "../../controllers/users/userCreate.controller";

const user = Router();

const userRouter = () => {
  user.get("/",);
  user.post("/register", userCreateController)
  user.post("/login", createLoginController)

  return user;
};

export default userRouter;