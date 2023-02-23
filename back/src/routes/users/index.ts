import { Router } from "express";
import { createLoginController } from "../../controllers/users/loginCreate.controller";
import { profileGetController } from "../../controllers/users/profileGet.controller";
import userCreateController from "../../controllers/users/userCreate.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";

const user = Router();

const userRouter = () => {
  user.get("/", authTokenMiddleware, profileGetController);
  user.post("/register", userCreateController)
  user.post("/login", createLoginController)

  return user;
};

export default userRouter;