import { useEffect, useState } from "react";
import Heading from "./Heading";
import Section from "./Section";

const StudentDirectory = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const [filteredStudent, setFilteredStudent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedField, setSelectedField] = useState("");

  useEffect(() => {
    const getBlogsData = async () => {
      const response = await fetch(`/api/v1/student/studentdetails`, {
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
      setStudentDetails(data);
    };

    getBlogsData();
    console.log("jopost data", studentDetails);
  }, []);

  useEffect(() => {
    // Filter alumni based on search query and selected field
    const filtered = studentDetails.filter((student) => {
      const fullName = `${student.fname} ${student.lname}`.toLowerCase();
      const matchesSearch = fullName.includes(searchQuery.toLowerCase());
      const matchesField = selectedField
        ? student.field === selectedField
        : true;
      return matchesSearch && matchesField;
    });

    setFilteredStudent(filtered);
  }, [searchQuery, selectedField, studentDetails]);

  return (
    <Section>
      <Heading className="md:max-w-md lg:max-w-4xl" title="Student Directory" />

      <div className="relative z-1 max-w-[90rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className=" px-8 bg-n-8 border border-n-6 rounded-[2rem] lg:w-90 even:py-14 odd:py-8 odd:my-4 lg:backdrop-blur-sm overflow-y-auto max-h-144">
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/3 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
            />

            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/3 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
            >
              <option value="">All Fields</option>
              {/* Replace these options with dynamic fields if available */}
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
              <option value="Artificial Intelligence and Machine Learning">
                Artificial Intelligence and Machine Learning
              </option>
              <option value="Electronics and Telecommunication">
                Electronics and Telecommunication
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
          </div>
          <div className="overflow-y-auto max-h-144">
            <table className="min-w-full bg-n-8 max-lg:h-90">
              <thead className="sticky top-0 bg-n-7">
                <tr>
                  <th className="py-2 px-4 border-b-2 border-n-7">Name</th>
                  <th className="py-2 px-4 border-b-2 border-n-7">
                    Year of admission
                  </th>
                  <th className="py-2 px-4 border-b-2 border-n-7">
                    Year of Graduation
                  </th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Email</th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Field</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudent.length > 0 ? (
                  filteredStudent.map((person) => (
                    <tr key={person.id} className="border-t border-gray-300">
                      <td className="py-3 px-4">
                        {person.fname + " " + person.lname}
                      </td>
                      <td className="py-3 px-4">{person.yearOfAdmission}</td>
                      <td className="py-3 px-4">{person.yearOfGraduation}</td>
                      <td className="py-3 px-4">{person.email}</td>
                      <td className="py-3 px-4">{person.field}</td>
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

export default StudentDirectory;
