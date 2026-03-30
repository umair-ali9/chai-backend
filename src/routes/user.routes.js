import { Router } from "express";
import { regiesterUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(regiesterUser)


export default router