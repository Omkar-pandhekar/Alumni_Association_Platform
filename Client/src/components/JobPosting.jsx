import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Button from "./Button";

const JobPosting = () => {
  return (
    <Section>
      <div className="relative z-1 max-w-[50rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <GradientLight />
        <div className="w-[2rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 backdrop-blur-sm ">
          <Heading className="md:max-2-md lg:max-w-2xl" title="Post Jobs" />
          <form className="flex flex-col">
            <input
              placeholder="Job title"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="text"
              name="jobtitle"
            />
            <input
              placeholder="Company Name"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="text"
              name="company"
            />

            <input
              placeholder="Location"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
              name="joblocation"
            />
            <input
              placeholder="Job type"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
              name="jobtype"
            />
            <textarea
              className="w-full h-32 p-2 bg-n-7 text-n-3 border-0 rounded-md  mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150 resize-y"
              placeholder="Job Description"
              name="jobdesc"
            ></textarea>

            <textarea
              className="w-full h-32 p-2 bg-n-7 text-n-3 border-0 rounded-md  mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150 resize-y"
              placeholder="Qualifications"
              name="qualifications"
            ></textarea>
            <input
              placeholder="Application Link"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="text"
              name="joblink"
            />
            <input
              placeholder="Appplication Deadline"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="dat"
              name="deadline"
            />

            <Button className="hidden lg:flex">Post</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default JobPosting;
