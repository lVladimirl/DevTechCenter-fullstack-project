import { Router } from "express";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import technologiesCreateController from "../../controllers/technologies/technologiesCreate.controller";
import technologiesUpdateController from "../../controllers/technologies/technologiesUpdate.controller";

const user = Router();

const technologyRouter = () => {
  user.get("/",);
  user.post("/register", authTokenMiddleware, technologiesCreateController)
  user.patch("/update/:techId", authTokenMiddleware, technologiesUpdateController)

  return user;
};

export default technologyRouter;