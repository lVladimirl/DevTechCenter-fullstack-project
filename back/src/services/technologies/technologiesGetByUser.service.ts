import { ITechnologieUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";

const technologiesGetByUserService = async ({
  userId,
}: ITechnologieUpdate) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!findUser) {
    throw new AppError(404, "user not find");
  } else {
    const technology = await prisma.technologies.findMany({
      where: {
        userId:userId
    },
      select:{
        id:true,
        name:true,
        status:true,
      }
    });
    return technology;
  }
};
export default technologiesGetByUserService;
