import mongoose from 'mongoose';

export const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/',{
        dbName:'Alumni'
    })
    .then(()=>{
        console.log("Database Connected Successfully ");
    })
    .catch(err => console.log(err));
}

