import prisma from "../../prisma";
import { IProfile } from "../../interfaces";
import { AppError } from "../../errors/AppError";

export const profileGetService = async ({ userId }: IProfile) => {
  const user = await prisma.user.findFirst({ where: { id: userId },select:{
    id:true,
    name:true,
    bio:true,
    status:true
  } });
  if (!user) {
    throw new AppError(404, "User was not found");
  } else {
    return user
  }
};
