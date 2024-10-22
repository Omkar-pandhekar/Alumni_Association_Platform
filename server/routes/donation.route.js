import express from "express";
import {
  postFees,
  postInfrastructure,
} from "../controllers/donation.controller.js";
const router = express.Router();

router.post("/donation", postInfrastructure);
router.post("/fees", postFees);

export default router;
