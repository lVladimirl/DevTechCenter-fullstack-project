import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ITechnologieUpdate } from "../../interfaces";
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
const technologiesUpdateController = async (req: Request, res: Response) => {
  try {
    const { techId } = req.params;
    const userId:string = req.user.id;
    const { name, status }: ITechnologieUpdate = req.body;
    const technology = await technologiesUpdateService({ name, status, userId, techId });

    return res.json({ technology });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default technologiesUpdateController;