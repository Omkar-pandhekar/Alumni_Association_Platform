import { Alumni } from "../models/alumni.model.js";
import jwt from "jsonwebtoken";
export const isAuthenticated = async (req,res,next) => {
    const {token} = req.cookies;
    if(!token) return res.status(404).json({
        success:false,
        message:"First Login"
    });

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log(decoded);

    req.user = await Alumni.findById(decoded._id);

    // console.log(req.user);
    console.log(req.user.email);

    
    next();
}