import express from 'express';
import {
	login,
	register,
	logout,
	loginTrainer,
	registerTrainer,
	logoutTrainer,
} from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

router.post('/login-trainer', loginTrainer);
router.post('/register-trainer', registerTrainer);
router.post('/logout-trainer', logoutTrainer);

export default router;
