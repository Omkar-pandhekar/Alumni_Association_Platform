import mongoose from "mongoose";

const FeesSchema = new mongoose.Schema({
  studentName:String,
  category:String,
  fees:Number,
  phoneNumber: String,
});

export const Fee = mongoose.model("FeeDB", FeesSchema);
