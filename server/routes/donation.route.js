import express from "express";
import {
  postFees,
  postInfrastructure,
  getAllFeesDonations,
} from "../controllers/donation.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/donation", postInfrastructure);
router.post("/fees", isAuthenticated, postFees);
router.get("/getHistory", getAllFeesDonations);
export default router;
