import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { GradientLight } from "./design/Benefits";

const Form = () => {
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
          <form className="flex flex-col">
            <div className="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/2 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
                type="text"
              />
              <input
                placeholder="Last Name"
                className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/2 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
                type="text"
              />
            </div>
            <input
              placeholder="Email"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="email"
            />
            <input
              placeholder="Confirm Email"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="email"
            />
            <input
              placeholder="Password"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
            />
            <input
              placeholder="Confirm Password"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
            />

            <label
              className="text-sm mb-2 text-n-3 cursor-pointer"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="gender"
            >
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
            >
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
            >
              <option value="alumni">Computer Science and Engineering</option>
              <option value="student">
                Artificial Intelligence and Machine Learning
              </option>
              <option value="student">Electronics and Telecommunication</option>
              <option value="student">Mechanical Engineering</option>
              <option value="student">Mechanical Engineering</option>
            </select>
            <Button className="hidden lg:flex" href="#login">
              Register
            </Button>
            <p className="text-white mt-4">
              Already have an account?
              <a
                className="text-sm text-blue-500 -200 hover:underline mt-4"
                href="#"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      );
    </Section>
  );
};

export default Form;
