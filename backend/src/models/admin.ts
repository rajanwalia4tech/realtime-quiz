import mongoose, {Document, Schema} from 'mongoose';
import {QuizDoc} from './quiz';
import { timeStamp } from 'console';

interface AdminDoc extends Document{
    name : string;
    email : string;
    password : string;
    createdQuizzes : [QuizDoc]
}

const AdminSchema = new Schema({
    name : {type:String, required:true},
    email : {type:String,required:true},
    password:{type:String,required:true},
    createdQuizzes : [{
        type: Schema.Types.ObjectId,
        ref: 'quiz'
    }]
},{
    timestamps:true
})

const Admin = mongoose.model<AdminDoc>('admin', AdminSchema);

export {Admin};
