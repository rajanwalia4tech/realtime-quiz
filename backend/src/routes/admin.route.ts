import express from 'express';
export let router = express.Router();
import { AdminController } from '../controllers'
const adminController = new AdminController();

router.get("/create",adminController.create);

router.post("/login",adminController.login);

router.get("/profile",adminController.getProfile);