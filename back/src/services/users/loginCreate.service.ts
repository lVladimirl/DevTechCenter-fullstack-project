import jwt from "jsonwebtoken";
import "dotenv/config";
import prisma from "../../prisma";
import { IUserLogin } from "../../interfaces";
import { compare } from "bcrypt";
import { AppError } from "../../errors/AppError";

export const loginCreateService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.user.findFirst({ where: { email: email } });
  if (!user) {
    throw new AppError(400, "User is not find");
  } else {
    const checkPassword = await compare(password, user.password);
    if (checkPassword) {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY as string,
        {
          subject: user.id,
          expiresIn: "2h",
        }
      );
      return token;
    } else {
      throw new AppError(400, "invalid credential");
    }
  }
};
