import { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const FeedbackHistory = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getFeedbacks = async () => {
      const response = await fetch(`/api/v1/feedback/getfeedbacks`, {
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
      setFeedbacks(data);
    };

    getFeedbacks();
    console.log("jopost data", feedbacks);
  }, []);

  return (
    <Section>
      <Heading className="md:max-w-md lg:max-w-4xl" title="Feedbacks" />

      <div className="relative z-1 max-w-[90rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className=" px-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-90 even:py-14 odd:py-8 odd:my-4 lg:backdrop-blur-sm overflow-y-auto max-h-144">
          <div className="overflow-y-auto max-h-144">
            <table className="min-w-full bg-n-8 max-lg:h-90">
              <thead className="sticky top-0 bg-n-7">
                <tr>
                  <th className="py-2 px-4 border-b-2 border-n-7">Name</th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Email</th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Message</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.length > 0 ? (
                  feedbacks.map((person) => (
                    <tr key={person.id} className="border-t border-gray-300">
                      <td className="py-3 px-4">{person.fullname}</td>
                      <td className="py-3 px-4">{person.email}</td>
                      <td className="py-3 px-4">{person.feedback}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-4 text-center">
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeedbackHistory;
