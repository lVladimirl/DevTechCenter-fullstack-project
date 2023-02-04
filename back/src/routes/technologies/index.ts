import { Router } from "express";
import technologiesCreateController from "../../controllers/technologies/technologiesCreate.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";

const user = Router();

const technologyRouter = () => {
  user.get("/",);
  user.post("/register", authTokenMiddleware, technologiesCreateController)

  return user;
};

export default technologyRouter;