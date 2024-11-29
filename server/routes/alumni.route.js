import express from "express";
import { getAllAlumniDetails, postSendMail } from "../controllers/alumni.controller.js";

const router = express.Router();

router.get("/alumnidetails", getAllAlumniDetails);
router.post("/sendmail",postSendMail);

export default router;
