import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ITechnologieUpdate } from "../../interfaces";
import technologiesGetByUserService from "../../services/technologies/technologiesGetByUser.service";
import technologiesUpdateService from "../../services/technologies/technologiesUpdate.service";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}
const technologiesGetByUserController = async (req: Request, res: Response) => {
  try {
    const userId:string = req.user.id;
    const technology = await technologiesGetByUserService({userId})

    return res.json({ technology });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default technologiesGetByUserController;