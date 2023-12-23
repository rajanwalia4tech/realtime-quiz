import express from 'express';
export let router = express.Router();
import { UserController } from '../controllers'
const userController = new UserController();

router.post("/create",userController.create);

router.post("/login",userController.login);

router.get("/profile",userController.getProfile);



