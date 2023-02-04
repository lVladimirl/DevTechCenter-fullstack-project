import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ITechnologieCreateUpdate } from "../../interfaces";
import technologiesCreateService from "../../services/technologies/technologiesCreate.service";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}
const technologiesCreateController = async (req: Request, res: Response) => {
  try {
    const { name, status }: ITechnologieCreateUpdate = req.body;
    const userId:string = req.user.id;
    const technology = await technologiesCreateService({ name, status, userId });

    return res.json({ technology });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default technologiesCreateController;