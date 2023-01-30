import { statusType } from "@prisma/client"
export interface IUserCreateUpdate {
    name: string
    email: string
    password: string
    bio: string
    contact: string
    status: statusType
}
// export interface IUserLogin {
//     email:string
//     password:string
// }