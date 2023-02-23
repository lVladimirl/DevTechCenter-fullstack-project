import { Router } from "express";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import technologiesCreateController from "../../controllers/technologies/technologiesCreate.controller";
import technologiesUpdateController from "../../controllers/technologies/technologiesUpdate.controller";
import technologiesDeleteController from "../../controllers/technologies/technologiesDelete.controller";
import technologiesGetByUserController from "../../controllers/technologies/technologiesGetByUser.controller";

const user = Router();

const technologyRouter = () => {
  user.get("/");
  user.get("/", authTokenMiddleware, technologiesGetByUserController)
  user.post("/register", authTokenMiddleware, technologiesCreateController);
  user.patch(
    "/update/:techId",
    authTokenMiddleware,
    technologiesUpdateController
  );
  user.delete(
    "/delete/:techId",
    authTokenMiddleware,
    technologiesDeleteController
  );

  return user;
};

export default technologyRouter;
