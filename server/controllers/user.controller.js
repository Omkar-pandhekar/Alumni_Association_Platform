import {User} from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {sendCookie}  from "../utils/cookieparse.util.js";
export const postRegister = async (req, res) => {
    console.log(req.body);
    const {
      lname,
      email,
      password,
      gender,
      role,
      yearOfAdmission,
      yearOfGraduation,
      field,
    } = req.body;
    
    const user = await User.findOne({email});
    if(user) res.redirect('/login');
    const HashedPassword = await bcrypt.hash(password,10);
    await User.create({
      lname,
      email,
      password : HashedPassword,
      gender,
      role,
      yearOfAdmission,
      yearOfGraduation,
      field,
    })
      .then((e) => res.json(e))
      .catch((err) => console.log(err));
  }


export const postLogin = async (req,res) => {
  const {email,password} = req.body;
  console.log(email,password);
  const user = await User.findOne({email}).select('+password');
  console.log(user);
  if(!user) {
     return res.redirect('/signup');
  }  

  const isPasswordMatch = await bcrypt.compare(password,user.password);
  
  if(!isPasswordMatch) {
    return res.status(400).redirect('/login');
  } 
  
    console.log('SuccessFully Login');
    // sendCookie(user,res);

  //  return res.redirect('/profile');

}

export const getSignUp = (req,res) => {
  res.render('signup');
}

export const getLogin = (req,res) => {
  res.render('login');
}