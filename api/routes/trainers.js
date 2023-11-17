import express from 'express';
import { getUser } from '../controllers/trainers.js';

const router = express.Router();

router.get('/find/:userId', getUser);

export default router;
