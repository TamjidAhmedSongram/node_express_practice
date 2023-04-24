import { Router } from "express";
import { contactGet , contactGetById , createNew , updateById , deleteById } from "../controllers/contactActions";
const router = Router();


router.route("/").get(contactGet).post(createNew)
router.route("/:id").get(contactGetById).put(updateById).delete(deleteById)


export default router