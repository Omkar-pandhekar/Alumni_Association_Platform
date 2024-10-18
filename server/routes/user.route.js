import express from 'express';
import { getLogout, postLogin, postRegister } from '../controllers/user.controller.js';

const router = express.Router();



// Get Api
router.get('/logout',getLogout);

// Post Api 
router.post('/signup',postRegister);
router.post('/login',postLogin);

export default router;