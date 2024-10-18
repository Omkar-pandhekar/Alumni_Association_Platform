import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Alumni } from "../models/alumni.model.js";
import { Student } from "../models/student.model.js";
import { Admin } from "../models/admin.model.js";
// import {sendCookie}  from "../utils/cookieparse.util.js";
export const postRegister = async (req, res) => {
  console.log(req.body);
  const {
    fname,
    lname,
    email,
    password,
    gender,
    role,
    yearOfAdmission,
    yearOfGraduation,
    field,
  } = req.body;
  console.log(role);

  if (role === "alumni") {
    const user = await Alumni.findOne({ email });
    if (user) res.json({ status: false, message: "User is Already Exits " });
    const HashedPassword = await bcrypt.hash(password, 10);
    await Alumni.create({
      fname,
      lname,
      email,
      password: HashedPassword,
      gender,
      // role,
      yearOfAdmission,
      yearOfGraduation,
      field,
    })
      .then((e) => res.json(e))
      .catch((err) => console.log(err));
  }

  if (role === "student") {
    const user = await Student.findOne({ email });
    if (user) res.redirect("/login");
    const HashedPassword = await bcrypt.hash(password, 10);
    await Student.create({
      fname,
      lname,
      email,
      password: HashedPassword,
      gender,
      yearOfAdmission,
      yearOfGraduation,
      field,
    })
      .then((e) => res.json(e))
      .catch((err) => console.log(err));
  }

  if (role === "admin") {
    const user = await Admin.findOne({ email });
    if (user) res.json({ status: false, message: "User is Already Exits " });
    const HashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({
      fname,
      lname,
      email,
      password: HashedPassword,
      gender,
    })
      .then((e) => res.json(e))
      .catch((err) => console.log(err));
  }

  // const user = await User.findOne({email});
  // if(user) res.redirect('/login');
  // const HashedPassword = await bcrypt.hash(password,10);
  // await User.create({
  //   fname,
  //   lname,
  //   email,
  //   password : HashedPassword,
  //   gender,
  //   role,
  //   yearOfAdmission,
  //   yearOfGraduation,
  //   field,
  // })
  //   .then((e) => res.json(e))
  //   .catch((err) => console.log(err));
};

export const postLogin = async (req, res) => {
  const { email, password, role } = req.body;
  console.log(email, password, role);

  if (role === "alumni") {
    const user = await Alumni.findOne({email}).select("+password");
    console.log(user);
    if (!user) {
      return res.status(400).json("User not Registered ");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false });
    }
    console.log("SuccessFully Login");
    // res.status(201).json('success');
    // sendCookie(user,res);

    const token = jwt.sign(
      { _id: user._id },
      "SECRET-KEY-TOKEN", // process.env.KEY,
      { expiresIn: "1h" }
    );
    console.log("Token Generated", token);

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    console.log("Cookie Generated ");

    return res.json({
      status: true,
      message: 'alumni',
      token: token,
    });
  }

   if (role === "student") {
    const user = await Student.findOne({ email }).select("+password");
    console.log(user);
    if (!user) {
      return res.status(400).json("User not Registered ");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false });
    }
    console.log("SuccessFully Login");
    // res.status(201).json('success');
    // sendCookie(user,res);

    const token = jwt.sign(
      { _id: user._id },
      "SECRET-KEY-TOKEN", // process.env.KEY,
      { expiresIn: "1h" }
    );
    console.log("Token Generated", token);

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    console.log("Cookie Generated ");

    return res.json({
      status: true,
      message: 'student',
      token: token,
    });

  }

  // Admin 
  if (role === "admin") {
    const user = await Admin.findOne({ email }).select("+password");
    console.log(user);
    if (!user) {
      return res.status(400).json("User not Registered ");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false });
    }
    console.log("SuccessFully Login");
    // res.status(201).json('success');
    // sendCookie(user,res);

    const token = jwt.sign(
      { _id: user._id },
      "SECRET-KEY-TOKEN", // process.env.KEY,
      { expiresIn: "1h" }
    );
    console.log("Token Generated", token);

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    console.log("Cookie Generated ");

    return res.json({
      status: true,
      message:'admin',
      token: token,
    });

  }


};

export const getLogout = async (req, res) => {
  console.log("At Function");
  res.clearCookie("token");
  // res.cookie('token','',{httpOnly:true,maxAge:0,path:'/'});

  console.log("At Function");

  return res.json({ status: true, message: "Logout " });
};
