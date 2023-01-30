import { IUserCreateUpdate } from "../../interfaces";
import prisma from "../../prisma";
import { statusType } from "@prisma/client";
import { AppError } from "../../errors/AppError";
const userCreateService = async (userData: IUserCreateUpdate) => {
  const { name, email, password, bio, contact, status } = userData;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
      bio: bio,
      contact: contact,
      status: status,
    },
    select: {
        name: true,
        email: true,
        bio:true
    },
  });
  console.log(user)

  if(user){
    return user
  }else {
    throw new AppError(400, "algo deu erado");
  }
  
};
export default userCreateService;
