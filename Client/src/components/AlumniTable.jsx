import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

const AlumniTable = () => {
  // Initial sample data for the table
  const [alumni, setAlumni] = useState([
    {
      id: 1,
      name: "John Doe",
      placedIn: "Google",
      year: 2020,
      contact: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      placedIn: "Microsoft",
      year: 2019,
      contact: "987-654-3210",
    },
    {
      id: 3,
      name: "Michael Lee",
      placedIn: "Facebook",
      year: 2021,
      contact: "456-789-1234",
    },
    {
      id: 4,
      name: "Emma Wilson",
      placedIn: "Amazon",
      year: 2022,
      contact: "654-321-9870",
    },
    {
      id: 5,
      name: "Daniel Evans",
      placedIn: "Netflix",
      year: 2018,
      contact: "234-567-8901",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      placedIn: "Apple",
      year: 2020,
      contact: "321-654-9870",
    },
    {
      id: 7,
      name: "Liam Brown",
      placedIn: "Tesla",
      year: 2021,
      contact: "654-987-1234",
    },
    {
      id: 8,
      name: "Olivia Davis",
      placedIn: "Adobe",
      year: 2019,
      contact: "987-321-6540",
    },
    {
      id: 9,
      name: "Noah Johnson",
      placedIn: "Intel",
      year: 2020,
      contact: "432-987-6543",
    },
    {
      id: 10,
      name: "Ava Taylor",
      placedIn: "SpaceX",
      year: 2021,
      contact: "890-123-4567",
    },
    {
      id: 11,
      name: "Elijah Moore",
      placedIn: "IBM",
      year: 2018,
      contact: "321-789-4561",
    },
  ]);

  // State to manage the search input, category filter, and selected alumni
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [selectedAlumni, setSelectedAlumni] = useState([]);

  // Function to handle deleting selected rows
  const handleDeleteSelected = () => {
    setAlumni(alumni.filter((person) => !selectedAlumni.includes(person.id)));
    setSelectedAlumni([]);
  };

  // Function to handle deleting a single row
  const handleDelete = (id) => {
    setAlumni(alumni.filter((person) => person.id !== id));
  };

  // Handle selecting/deselecting a row
  const handleSelect = (id) => {
    if (selectedAlumni.includes(id)) {
      setSelectedAlumni(selectedAlumni.filter((alumniId) => alumniId !== id));
    } else {
      setSelectedAlumni([...selectedAlumni, id]);
    }
  };

  // Handle sending email to selected alumni
  const handleSendEmail = () => {
    const selectedContacts = alumni
      .filter((person) => selectedAlumni.includes(person.id))
      .map((person) => person.contact);
    alert(`Sending email to: ${selectedContacts.join(", ")}`);
  };

  // Filtered alumni based on search term and category
  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    const matchesCategory = category === "" || person.placedIn === category;
    return matchesSearch && matchesCategory;
  });

  // Get unique companies for the category filter
  const uniqueCompanies = [...new Set(alumni.map((person) => person.placedIn))];

  return (
    <Section>
      <Heading className="md:max-w-md lg:max-w-4xl" title="Alumni Directory" />
      <div className="relative z-1 max-w-[80rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className=" px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-90 even:py-14 odd:py-8 odd:my-4 lg:backdrop-blur-sm overflow-y-auto max-h-144">
          {/* Search and Category Filter */}
          <div className="flex justify-between mb-6">
            <input
              type="text"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/3 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 w-1/3 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Companies</option>
              {uniqueCompanies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          {/* Scrollable Table */}
          <div className="overflow-y-auto max-h-144">
            <table className="min-w-full bg-n-8 max-lg:h-90">
              <thead className="sticky top-0 bg-n-7">
                <tr>
                  <th className="py-2 px-4 border-b-2 border-n-7">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAlumni(filteredAlumni.map((p) => p.id));
                        } else {
                          setSelectedAlumni([]);
                        }
                      }}
                      checked={
                        selectedAlumni.length > 0 &&
                        selectedAlumni.length === filteredAlumni.length
                      }
                    />
                  </th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Name</th>
                  <th className="py-2 px-4 border-b-2 border-n-7">Placed In</th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Year of Graduation
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Contact Number
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAlumni.length > 0 ? (
                  filteredAlumni.map((person) => (
                    <tr key={person.id} className="border-t border-gray-300">
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          checked={selectedAlumni.includes(person.id)}
                          onChange={() => handleSelect(person.id)}
                        />
                      </td>
                      <td className="py-3 px-4">{person.name}</td>
                      <td className="py-3 px-4">{person.placedIn}</td>
                      <td className="py-3 px-4">{person.year}</td>
                      <td className="py-3 px-4">{person.contact}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleDelete(person.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center">
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Actions for Selected Alumni */}
          {selectedAlumni.length > 0 && (
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSendEmail}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Email to Selected
              </button>
              <button
                onClick={handleDeleteSelected}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete Selected
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AlumniTable;
