import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { GradientLight } from "./design/Benefits";
import { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


const Form = () => {
  // To Take the input
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const [yearOfAdmission, setYearOfAdmission] = useState();
  const [yearOfGraduation, setYearOfGraduation] = useState();
  const [field, setField] = useState();
  const navigate = useNavigate();

  //  gender role year of Admission yearofGraduation Field
  const HandleSubmit = (e) => {
    e.preventDefault();

    const yearOfAdmissionNumber = parseInt(yearOfAdmission);
    const yearOfGraduationNumber = parseInt(yearOfGraduation)

    console.log(fname,
      lname,
      email,
      password,
      gender,
      role,
      yearOfAdmission,
      yearOfGraduation,
      field);

      
    axios
      .post("http://localhost:3000/signup", {
        fname,
        lname,
        email,
        password,
        gender,
        role,
        yearOfAdmission : yearOfAdmissionNumber,
        yearOfGraduation : yearOfGraduationNumber,
        field,
      })
      .then((result) => {
        console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <Section>
      <div className="flex space-x-8 relative z-1 max-w-[16rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <Button href={"../main.jsx"}>Alumni</Button>
        <Button>Student</Button>
      </div>
      <div className="relative z-1 max-w-[45rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <GradientLight />
        <div className=" px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 lg:backdrop-blur-sm ">
          <Heading className="md:max-2-md lg:max-w-2xl" title="Register" />
          <form className="flex flex-col" onSubmit={HandleSubmit} action="post">
            <div className="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/2 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
                type="text"
                name="fname"
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                placeholder="Last Name"
                className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/2 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
                type="text"
                name='lname'
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <input
              placeholder="Email"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="email"
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <input
              placeholder="Confirm Email"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="email"
            /> */}
            <input
              placeholder="Password"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              placeholder="Confirm Password"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
            /> */}

            <label
              className="text-sm mb-2 text-n-3 cursor-pointer"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=""> select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label
              className="text-sm mb-2 text-n-3 cursor-pointer"
              htmlFor="role"
            >
              Role
            </label>
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="gender"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=""> select Role</option>
              <option value="alumni">Alumni</option>
              <option value="student">Student</option>
            </select>
            <div className="flex space-x-8 mb-6">
              <label
                className="text-sm mb-2 text-n-3 cursor-pointer"
                htmlFor="age"
              >
                Year of Admission
              </label>
              <input
                className="bg-n-7 text-n-3 border-0 rounded-md p-2"
                id="age"
                type="number"
                minLength="4"
                maxLength="4"
                name="yearOfAdmission"
                onChange={(e) => setYearOfAdmission(e.target.value)}
              />
              <label
                className="text-sm mb-2 text-n-3 cursor-pointer"
                htmlFor="age"
              >
                Year of Graduation
              </label>
              <input
                className="bg-n-7 text-n-3 border-0 rounded-md p-2"
                id="age"
                type="number"
                name="yearOfGraduation"
                onChange={(e) => setYearOfGraduation(e.target.value)}
              />
            </div>
            <label
              className="text-sm mb-2 text-n-3 cursor-pointer"
              htmlFor="role"
            >
              Field
            </label>

            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n=7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="gender"
              value={field}
              name="field"
              onChange={(e) => setField(e.target.value)}
            >
              <option value=""> select Field</option>
              <option value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option value="Artificial Intelligence and Machine Learning">
                Artificial Intelligence and Machine Learning
              </option>
              <option value="Electronics and Telecommunication">Electronics and Telecommunication</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering </option>
            </select>
           
            <Button className="hidden lg:flex" >
              <button type="submit"> Register</button>
              
            </Button>
           
          </form>
            <p className="text-white mt-4">
              Already have an account?
              <Link
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                to={'/login'}
              >
                Login
              </Link>
            </p>
        </div>
      </div>
    
    </Section>
  );
};

export default Form;
