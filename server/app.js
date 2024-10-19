import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();
// import { User } from "./models/user.model.js";

// Routes Importing
import userRouter from "./routes/user.route.js";
import feedbackRoutes from "./routes/feedback.route.js";
import DonationRoutes from "./routes/donation.route.js";

dotenv.config({ path: "./.env" });

// app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
// dotenv.config({ path: "./.env" });

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(dotenv());

// connectDB();

// using Routers
// app.use("/",userRouter);
app.use("/api/v1/user/", userRouter);
app.use("/api/v1/feedback/", feedbackRoutes);
app.use("/api/v1/donate/", DonationRoutes);

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
