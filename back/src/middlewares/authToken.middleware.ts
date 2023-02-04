import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "../errors/AppError"

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization

  if (!token) {
    throw new AppError(401,"Token Invalido")
  }

  token = token?.split(" ")[1]

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(401,"Token Invalido")
      }

      req.user = {
        id: decoded.id,
      }
    }
  )
  next()
}

