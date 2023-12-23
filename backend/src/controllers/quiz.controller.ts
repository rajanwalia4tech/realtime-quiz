import {Request,Response} from 'express';
import {Quiz} from '../models';
import mongoose from 'mongoose';

export class QuizController{
    admin : any;
    quiz : any;
    constructor(){
        this.quiz = Quiz;
    }
    
    async create(req: Request, res:Response){
        await Quiz.create({
            title: "Java",
            admin : "6587484195fee72d89b82f94",
            questions: [
                {
                  text: 'What is the capital of France?',
                  answers: [
                    { text: 'Paris', isCorrect: true },
                    { text: 'Berlin', isCorrect: false },
                    { text: 'Madrid', isCorrect: false },
                  ],
                },
              ],
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
        let adminInfo = await Quiz.findOne({
            name:"Rajan"
        });

        return res.status(200).json({
            message: "getProfile",
            adminInfo
        })
    }
}