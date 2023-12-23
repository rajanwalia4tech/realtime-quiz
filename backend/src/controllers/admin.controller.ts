import {Request,Response} from 'express';
import {Admin,Quiz} from '../models';

export class AdminController{
    admin : any;
    quiz : any;
    constructor(){
        this.admin = Admin;
        this.quiz = Quiz;
    }
    
    async create(req: Request, res:Response){
        await Admin.create({
            name:"Rajan",
            password : "2324",
            email : "sdfgs",
            createdQuizzes : []
        });
        return res.status(200).json({
            message: "login"
        })
    }

    login(req: Request, res:Response){
        return res.status(200).json({
            message: "login"
        })
    }

    async getProfile(req:Request,res:Response){
        let adminInfo = await Admin.findOne({
            name:"Rajan"
        });

        return res.status(200).json({
            message: "getProfile",
            adminInfo
        })
    }
}