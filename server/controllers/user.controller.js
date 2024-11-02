import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Alumni } from "../models/alumni.model.js";
import { Student } from "../models/student.model.js";
import { Admin } from "../models/admin.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.util.js";
import { AlumniProfile } from "../models/alumniProfile.model.js";
import { upload } from "../middlewares/multer.middleware.js";
import { studentProfile } from "../models/studentProfile.model.js";

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

export let userMode = "";
export const postLogin = async (req, res) => {
  const { email, password, role } = req.body;
  console.log(email, password, role);
  userMode = role;
  // Alumni
  if (role === "alumni") {
    const user = await Alumni.findOne({email}).select("+password");
    console.log(user);

    if (!user) {
      return res.status(400).json("User not Registered ");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ success: false});
    }
    console.log("SuccessFully Login");
    // res.status(201).json('success');
    // sendCookie(user,res);

    const token = jwt.sign(
      { _id: user._id ,
        role,
      },
      process.env.JWT_SECRET, // process.env.KEY,
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
  // Student
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
      { _id: user._id ,
        role,
      },
      process.env.JWT_SECRET, // process.env.KEY,
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
      { _id: user._id ,
        role,
      },
      process.env.JWT_SECRET, // process.env.KEY,
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

export const getProfile = async (req,res) => {
  console.log("In the get Profile Function ")
  const userId = req.user._id;
  const email = req.user.email;
  console.log(email);
  const loginUser = req.role;
  console.log(userId);
  console.log(loginUser);
  // console.log(userMode);
   if(loginUser==='alumni'){
     const alumni = await Alumni.findById(userId);
     const alumniProfile = await AlumniProfile.findOne({email});
     console.log(alumniProfile);
    //  console.log(alumniProfile.skills[0][0]);
    const skillArray =  JSON.parse(alumniProfile.skills[0]);  
     if(alumniProfile) {
        const sendData = {
          name:alumni.fname +" "+alumni.lname,
          bio: alumniProfile.bio,
          location: alumniProfile.location,
          email: email,
          phone:alumniProfile.phone,
          skills:skillArray,
          profilePhoto:alumniProfile.profilePhoto,
          backgroundImage:alumniProfile.backgroundImage,
        };
        console.log("SendData Object",sendData);
        res.send(sendData);
     }

     else {
       console.log("Alumni Object ",alumni);
       res.send(alumni);
     }
   }
   else if (loginUser ==='student'){
    const student = await Student.findById(userId);
      const studentprofile = await studentProfile.findOne({email});
      console.log(studentprofile);
      res.send(student);
   }
  //  else if(loginUser==='student'){
  //   const student = await Student.findById(userId);
  //   const studentprofile = await studentProfile.findOne({email});
  //   console.log(studentprofile);
  //   if(studentprofile) {
  //     // const skillArray =  JSON.parse(studentprofile.skills[0]);  

  //     let skillArray;
  //     try {
  //       if (typeof studentprofile.skills[0] === 'string') {
  //         skillArray = JSON.parse(studentprofile.skills[0]); // Parse JSON string if necessary
  //       } else {
  //         skillArray = studentprofile.skills; // Use as-is if it's already an array
  //       }
  //     } catch (error) {
  //       console.log("Error parsing skills: ", error);
  //       skillArray = []; // Fallback to an empty array if parsing fails
  //     }

  //     const sendData = {
  //       isChanged:true,
  //       name:student.fname +" "+student.lname,
  //       bio: studentprofile.bio,
  //       location: studentprofile.location,
  //       email: email,
  //       phone:studentprofile.phone,
  //       skills:skillArray ,
  //       profilePhoto:studentprofile.profilePhoto,
  //       backgroundImage:studentprofile.backgroundImage,
  //     };
  //     console.log("SendData Object from true ",sendData);
  //     console.log(sendData);
  //     res.send(sendData);
  //   }
  //   else {
  //     console.log("Student Object  from false ",student);
      
  //     const sendData = {
  //       // isChanged:false,
  //       name:student.fname +" "+student.lname,
  //       email: email
        
  //     }
  //     console.log(sendData);
  //     res.send(sendData);
  //   }
  // }
}

export const postSetProfile = async (req,res) => {
  // const {formData,editing,profileInfo} = req.body;
  const userId = req.user._id;
  const loginUser = req.role;
  console.log(userId);
  console.log(loginUser);
  const email = req.user.email;
  console.log(email);
  const UserFind = await AlumniProfile.find({email});
  const { name, bio, location, phone, skills} = req.body;  
  console.log(name, bio, location, phone, skills);

  // console.log(req.body);
    // console.log(name,email);
    // console.log(editing);
    // console.log(req.files);
    // console.log(req.files['profilePhoto'][0]);
    // upload.fields([{ name: "profilePhoto",maxCount:1}, { name: "backgroundImage" ,maxCount:1}]);
    let profilePhotoUrl = UserFind ? UserFind.profilePhoto:"";
    let backgroundImageUrl = UserFind ? UserFind.backgroundImage:"";
    if(req.files && req.files['profilePhoto'] && req.files['profilePhoto'][0]){
      console.log(req.files['profilePhoto'][0].path);
       const profilePhoto = await uploadOnCloudinary(req.files['profilePhoto'][0].path,'Alumni_Association/AlumniProfile/ProfilePhoto');
      console.log(profilePhoto);
      console.log(profilePhoto.secure_url);
      profilePhotoUrl = profilePhoto.secure_url;
    }
    if(req.files && req.files['backgroundImage'] && req.files['backgroundImage'][0]){
      const backgroundImage = await uploadOnCloudinary(req.files['backgroundImage'][0].path,'Alumni_Association/AlumniProfile/backgroundImage');
      console.log(backgroundImage);
      console.log(backgroundImage.secure_url);
      backgroundImageUrl = backgroundImage.secure_url;
    }
    console.log(name, bio, location, email, phone, skills);
  const receivedData= {
    email,
    bio,
    location,
    phone,
    skills,
    profilePhoto :profilePhotoUrl,
    backgroundImage:backgroundImageUrl,
  }
  if(UserFind) {
    await AlumniProfile.updateOne(
      {email},
      {$set:receivedData},
      {upsert:false},
    )
  }
  else {
    await AlumniProfile.create(receivedData);

  }
     // console.log(formData);  

}

export const postSetProfileStudent = async (req,res) => {
  // const {formData,editing,profileInfo} = req.body;
  const userId = req.user._id;
  const loginUser = req.role;
  console.log(userId);
  console.log(loginUser);
  const email = req.user.email;
  console.log(email);
  const UserFind = await studentProfile.find({email});

  // console.log(req.body);
  const { name, bio, location, phone, skills} = req.body;  
  console.log(name, bio, location, phone, skills);

  
  // console.log(req.body);
    // console.log(name,email);
    // console.log(editing);
    // console.log(req.files);
    // console.log(req.files['profilePhoto'][0]);
    // upload.fields([{ name: "profilePhoto",maxCount:1}, { name: "backgroundImage" ,maxCount:1}]);
    let profilePhotoUrl = UserFind ? UserFind.profilePhoto:"";
    let backgroundImageUrl = UserFind ? UserFind.backgroundImage:"";
    if(req.files && req.files['profilePhoto'] && req.files['profilePhoto'][0]) {

      console.log(req.files['profilePhoto'][0].path);
       const profilePhoto = await uploadOnCloudinary(req.files['profilePhoto'][0].path,'Alumni_Association/StudentProfile/ProfilePhoto');
      console.log(profilePhoto);
      console.log(profilePhoto.secure_url);
      profilePhotoUrl = profilePhoto.secure_url;
    }
    if(req.files && req.files['backgroundImage'] && req.files['backgroundImage'][0]) {
      
      const backgroundImage = await uploadOnCloudinary(req.files['backgroundImage'][0].path,'Alumni_Association/StudentProfile/backgroundImage');
      console.log(backgroundImage);
      console.log(backgroundImage.secure_url);
      backgroundImageUrl = backgroundImage.secure_url;
    }
    console.log(name, bio, location, email, phone, skills);
  const receivedData= {
    email,
    bio,
    location,
    phone,
    skills,
    profilePhoto :profilePhotoUrl,
    backgroundImage:backgroundImageUrl,
  }
  if(UserFind) {
    await studentProfile.updateOne(
      {email},
      {$set:receivedData},
      {upsert:false},
    )
  }
  else {
    await AlumniProfile.create(receivedData);

  }
    //  console.log(formData);  

}