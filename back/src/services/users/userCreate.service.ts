import { IUserCreateUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { AppError } from "../../errors/AppError";
import { hash } from "bcrypt";
const userCreateService = async (userData: IUserCreateUpdate) => {
  const { name, email, password, bio, contact, status } = userData;

  const checkUserExistence = await prisma.user.findFirst({
    where: { email: email },
  });

  if (checkUserExistence) {
    throw new AppError(401, "email alredy registered");
  } else {
    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        bio: bio,
        contact: contact,
        status: status,
      },
      select: {
        name: true,
        email: true,
        bio: true,
        technologies: {
          select: {
            name: true,
            status: true,
          },
        },
      },
    });

    return user;
  }
};
export default userCreateService;
