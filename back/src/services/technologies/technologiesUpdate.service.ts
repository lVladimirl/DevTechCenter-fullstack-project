import { ITechnologieUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";

const technologiesUpdateService = async ({
  name,
  status,
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
  const techAlredyRegistered = await prisma.technologies.findFirst({
    where: {
      name: name,
      userId: userId,
    },
  });

  if (!findUser) {
    throw new AppError(404, "user not find");
  } else if (!findTech) {
    throw new AppError(404, "technology was not found");
  } else if (techAlredyRegistered) {
    throw new AppError(
      401,
      "this tech alredy is registered in your repertoire,"
    );
  } else {
    const technology = await prisma.technologies.update({
      where: {
        id: findTech.id,
      },
      data: {
        name: name || findTech.name,
        status: status || findTech.status,
      },
    });
    return technology;
  }
};
export default technologiesUpdateService;
