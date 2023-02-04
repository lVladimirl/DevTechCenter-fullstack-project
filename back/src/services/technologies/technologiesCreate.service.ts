import { ITechnologieCreateUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";

const technologiesCreateService = async ({
  name,
  status,
  userId,
}: ITechnologieCreateUpdate) => {
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (findUser) {
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
        id:true,
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
    return technology
  } else {
    throw new AppError(404, "user not find");
  }
};
export default technologiesCreateService;
