import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { IUserCreateUpdate } from "../../interfaces";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const userData: IUserCreateUpdate = req.body;

    const user = await userCreateService(userData);

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default userCreateController;