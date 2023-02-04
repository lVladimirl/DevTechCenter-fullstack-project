import { Express } from 'express' 
import technologyRouter from './technologies'
import userRouter from './users'
export const appRoutes = (app: Express) => {
    app.use("/users", userRouter())
    app.use("/technologies", technologyRouter())

 }