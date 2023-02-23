import { ITechnologieUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";

const technologiesDeleteService = async ({
  userId,
  techId,
}: ITechnologieUpdate) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  const findTech = await prisma.technologies.findFirst({
    where: {
      id: techId,
    },
  });

  if (!findUser) {
    throw new AppError(404, "user not find");
  } else if (!findTech) {
    throw new AppError(404, "technology was not found");
  } else {
    const technology = await prisma.technologies.delete({
      where: {
        id: techId,
      },
    });
    return technology;
  }
};
export default technologiesDeleteService;
