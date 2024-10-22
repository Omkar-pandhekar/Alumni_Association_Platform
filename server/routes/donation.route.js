import express from "express";
import {
  postFees,
  postInfrastructure,
} from "../controllers/donation.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/donation", postInfrastructure);
router.post("/fees",isAuthenticated ,postFees);

export default router;
