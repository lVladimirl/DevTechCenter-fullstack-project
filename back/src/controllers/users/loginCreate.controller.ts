import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces";
import { loginCreateService } from "../../services/users/loginCreate.service";

export const createLoginController = async (req: Request, res: Response) => {
  const userData:IUserLogin = req.body;

  try {
    const token = await loginCreateService(userData);

    return res.json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};
