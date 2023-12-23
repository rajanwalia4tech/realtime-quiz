import {Request,Response} from 'express';

export class UserController{
    constructor(){}
    
    create(req: Request, res:Response){
        return res.status(200).json({
            message: "create"
        })
    }

    login(req: Request, res:Response){
        return res.status(200).json({
            message: "login"
        })
    }

    getProfile(req:Request,res:Response){
        return res.status(200).json({
            message: "Heello"
        })
    }

}


