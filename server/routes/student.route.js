import express from "express";
import { getAllStudentDetails } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/studentdetails", getAllStudentDetails);

export default router;
