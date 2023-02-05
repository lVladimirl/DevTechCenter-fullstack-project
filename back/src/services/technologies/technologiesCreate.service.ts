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
  const techAlredyExist = await prisma.technologies.findFirst({where:{
    name:name,
    user:{
      id:userId
    }
  }})

  if (!findUser) {
    throw new AppError(404, "user not find");
  } else if(techAlredyExist){
    throw new AppError(400, "this technology is alredy in your repertoire");
  }
  else {
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
  }
};
export default technologiesCreateService;
