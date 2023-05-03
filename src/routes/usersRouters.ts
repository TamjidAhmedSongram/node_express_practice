import { Router } from "express";
import {loginActions , registerActions , currentActions} from "../controllers/userActions"
const routes = Router()

routes.post("/login",loginActions)
routes.post("/register",registerActions)
routes.get("/current",currentActions)


export default routes

