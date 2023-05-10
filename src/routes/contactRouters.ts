import { Router } from "express";
import { contactGet , contactGetById , createNew , updateById , deleteById } from "../controllers/contactActions";
import validateToken from "../middlewares/validateJwtHandler";
const router = Router();

router.use(validateToken)
router.route("/").get(contactGet).post(createNew)
router.route("/:id").get(contactGetById).put(updateById).delete(deleteById)


export default router