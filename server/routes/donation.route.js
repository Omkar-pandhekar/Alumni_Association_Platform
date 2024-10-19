import express from 'express';
import { postInfrastructure } from '../controllers/donation.controller.js';
const router = express.Router();


router.post('/donation',postInfrastructure);

export default router;



