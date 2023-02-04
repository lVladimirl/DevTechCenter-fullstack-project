import { statusType, techStatus } from "@prisma/client"
export interface IUserCreateUpdate {
    name: string
    email: string
    password: string
    bio: string
    contact: string
    status: statusType
}

export interface ITechnologieCreateUpdate {
    name: string
    status: techStatus
    userId: string
}

export interface IUserLogin {
    email:string
    password:string
}