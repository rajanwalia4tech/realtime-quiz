// quiz.model.ts
import mongoose, { Document, Schema } from 'mongoose';

interface QuizDoc extends Document {
  title: string;
  admin: mongoose.Types.ObjectId; // Reference to Admin
  questions: QuestionDoc[];
}

interface QuestionDoc {
  text: string;
  answers: AnswerDoc[];
}

interface AnswerDoc {
  text: string;
  isCorrect: boolean;
}

const answerSchema: Schema<AnswerDoc> = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema: Schema<QuestionDoc> = new Schema({
  text: { type: String, required: true },
  answers: [answerSchema],
});

const quizSchema: Schema<QuizDoc> = new Schema({
  title: { type: String, required: true },
  admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
  questions: [questionSchema],
});

const Quiz = mongoose.model<QuizDoc>('quiz', quizSchema);

export { QuizDoc,Quiz };