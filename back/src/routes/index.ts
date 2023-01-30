import { Express } from 'express' 
import userRouter from './users'
export const appRoutes = (app: Express) => {
    app.use("/users", userRouter())

 }