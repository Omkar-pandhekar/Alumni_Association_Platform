import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    gender:String,
});



 export const Admin = mongoose.model('AdminDB',adminSchema);