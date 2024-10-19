import mongoose from 'mongoose';

const InfraSchema = new mongoose.Schema({
    phoneNumber :String,
    item : String,
    quantity:Number
});



 export const Infra = mongoose.model('InfraDB',InfraSchema);
