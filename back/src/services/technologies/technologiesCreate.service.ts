import { ITechnologieCreate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";

const technologiesCreateService = async ({
  name,
  status,
  userId,
}: ITechnologieCreate) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  const techAlredyExists = await prisma.technologies.findFirst({
    where: {
      name: name,
      userId: userId,
    },
  });

  if (!findUser) {
    throw new AppError(404, "user not find");
  } else if (techAlredyExists) {
    throw new AppError(
      401,
      "this tech alredy is registered in your repertoire,"
    );
  } else {
    const technology = await prisma.technologies.create({
      data: {
        name: name,
        status: status,
        user: {
          connect: {
            id: findUser.id,
          },
        },
      },
      select: {
        id: true,
        name: true,
        status: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return technology;
  }
};
export default technologiesCreateService;
