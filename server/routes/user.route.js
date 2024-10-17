import express from 'express';
import { postLogin, postRegister,getSignUp,getLogin } from '../controllers/user.controller.js';

const router = express.Router();


router.get('/signup',getSignUp);
router.get('/login',getLogin);


// Post Api 
router.post('/signup',postRegister);
router.post('/login',postLogin);

export default router;