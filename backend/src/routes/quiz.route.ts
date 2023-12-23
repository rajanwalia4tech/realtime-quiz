import express from 'express';
export let router = express.Router();
import { QuizController } from '../controllers'
const quizController = new QuizController();

router.get("/create",quizController.create);

router.post("/login",quizController.login);

router.get("/profile",quizController.getProfile);