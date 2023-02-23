import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ITechnologieUpdate } from "../../interfaces";
import technologiesDeleteService from "../../services/technologies/technologiesDelete.service";
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
const technologiesDeleteController = async (req: Request, res: Response) => {
  try {
    const { techId } = req.params;
    const userId:string = req.user.id;
    const technology = await technologiesDeleteService({techId, userId});

    return res.status(204).json([]);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default technologiesDeleteController;