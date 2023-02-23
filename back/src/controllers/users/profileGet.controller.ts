import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { profileGetService } from "../../services/users/profileGet.service";

declare global {
    namespace Express {
      interface Request {
        user: {
          id: string;
        };
      }
    }
  }

export const profileGetController = async (req: Request, res: Response) => {
  try {
    const userId: string = req.user.id;
    const profile = await profileGetService({userId});

    return res.status(200).json({ profile });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
