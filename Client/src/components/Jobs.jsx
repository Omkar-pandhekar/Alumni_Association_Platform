import { useEffect, useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import axios from "axios";

const AlumniStudentPosts = () => {
  const [jobPost, setJobPost] = useState([]);
  // const [user, setUser] = useState();
  useEffect(() => {
    const getBlogsData = async () => {
      const response = await fetch(`/api/v1/job/getAllJobPosts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response) {
        var data = await response.json();
      }
      console.log(data[0]);
      setJobPost(data);
    };

    getBlogsData();
    console.log("jopost data", jobPost);
  }, []);

  return (
    <Section>
      {/* <div className="min-h-screen bg-n-8 py-10 px-4"> */}
      <Heading title="Job Openings" />
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {jobPost.map((post) => (
            <div
              key={post._id}
              className="w-[2rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={post.profilePhoto}
                  alt={post.author}
                  className="w-16 h-16 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold text-n-1">
                    {post.author}
                  </h3>
                  <span className="text-sm text-n-2">
                    {" "}
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-n-1">
                Job title : {post.jobTitle}
              </h2>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Company Name</span> :{" "}
                {post.companyName}
              </p>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Location :</span> {post.jobLocation}
              </p>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Job Type :</span> {post.jobType}
              </p>

              <p className="text-n-2 mt-4">
                <span className="text-n-1">Job Description :</span>{" "}
                {post.jobDescription}
              </p>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Skills required : </span>
                {post.skillSet}
              </p>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Application Link : </span>
                <a className="text-blue-500" href={post.applicationLink}>
                  {post.applicationLink}
                </a>
              </p>
              <p className="text-n-2 mt-4">
                <span className="text-n-1">Application Deadline : </span>
                {new Date(post.applicationDeadline).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
              {/* <p className="text-n-2 mt-4">
                <span className="text-n-1">Application user : </span>
                {axios
                  .get(`/api/v1/job/getuser/${post.user}`)
                  .then(function (res) {
                    setUser(res.data);
                  })}
                {user?.fname}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AlumniStudentPosts;
