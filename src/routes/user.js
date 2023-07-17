import express from "express";
import dotenv from "dotenv";

import { save, update, rank } from "../controllers/userController.js";
const router = express.Router();

dotenv.config();

router.post("/save", save);
router.post("/update", update);
router.get("/rank", rank);

export default router;
