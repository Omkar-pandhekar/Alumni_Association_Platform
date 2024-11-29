import { Alumni } from "../models/alumni.model.js";
import { sendMail } from "../utils/sendMail.util.js";

export const getAllAlumniDetails = async (req, res, next) => {
  try {
    const alumnis = await Alumni.find();

    if (alumnis) {
      return res.status(200).json(alumnis);
    }
  } catch (error) {
    return res.status(400).json({
      error: "NO alumnis found in database",
    });
  }
};

export const postSendMail = async (req,res) => {
  try {
    console.log(req.body);
    const {email,subject,compose} = req.body;
    const response = await sendMail(email,subject,compose,res);
    res.status(200).json({
      success:true,
      message:"Email Send SuccessFully !"
    })
    return response;
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}
