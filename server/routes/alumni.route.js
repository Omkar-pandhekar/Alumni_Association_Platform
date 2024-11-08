import express from "express";
import { getAllAlumniDetails } from "../controllers/alumni.controller.js";

const router = express.Router();

router.get("/alumnidetails", getAllAlumniDetails);

export default router;
