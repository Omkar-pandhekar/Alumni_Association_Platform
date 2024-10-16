import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
export const app = express();
// import { User } from "./models/user.model.js";
import userRouter from "./routes/user.route.js";




app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// connectDB();


// using Routers 
app.use("/",userRouter);


// app.post("/signup", async (req, res) => {
//   console.log(req.body);
//   const {
//     lname,
//     email,
//     password,
//     gender,
//     role,
//     yearOfAdmission,
//     yearOfGraduation,
//     field,
//   } = req.body;
  
   
//   await User.create({
//     lname,
//     email,
//     password,
//     gender,
//     role,
//     yearOfAdmission,
//     yearOfGraduation,
//     field,
//   })
//     .then((e) => res.json(e))
//     .catch((err) => console.log(err));
// });

// app.listen(3000,()=>{
//     console.log("Server is Started !");
// })
