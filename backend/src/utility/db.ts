 
import mongoose from 'mongoose'; 

const MONGO_URI = "mongodb://127.0.0.1:27017/gromo-staging"

export default async() => {

    try {
        let conn = await mongoose.connect(MONGO_URI, {})
        console.log("Connected with mongoose");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}