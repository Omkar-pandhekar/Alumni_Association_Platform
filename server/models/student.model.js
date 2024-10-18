import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    gender:String,
    // role:String,
    yearOfAdmission:Number,
    yearOfGraduation:Number,
    field:String
});



 export const Student = mongoose.model('StudentDB',studentSchema);