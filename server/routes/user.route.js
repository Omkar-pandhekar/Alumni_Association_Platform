import express from 'express';
import { getLogout, getProfile, postLogin, postRegister } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const router = express.Router();



// Get Api
router.get('/logout',getLogout);
router.get('/profile',isAuthenticated,getProfile);
// Post Api 
router.post('/signup',postRegister);
router.post('/login',postLogin);

export default router;