import express, {Router} from 'express';
const router = Router();

import  {router as userRoutes} from './user.route';
import  {router as AdminRoutes } from './admin.route';
import {router as QuizRoutes} from './quiz.route';

router.use("/user",userRoutes);
router.use("/admin",AdminRoutes);
router.use("/quiz",QuizRoutes);

export default router;