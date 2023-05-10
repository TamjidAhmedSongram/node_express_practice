import { Router } from "express";
import {loginActions , registerActions , currentActions} from "../controllers/userActions"
import validateToken from "../middlewares/validateJwtHandler";
const routes = Router()

routes.post("/login",loginActions)
routes.post("/register",registerActions)
routes.get("/current",validateToken,currentActions)


export default routes

