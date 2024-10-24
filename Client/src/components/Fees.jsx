import Heading from "../components/Heading";
import ScholarshipTable from "./ScholarshipTable";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Fees = () => {
  const handleFeesSelection = (person) => {
    setSelectedPerson(person);
  };
  const navigate = useNavigate();
  const [selectedPerson, setSelectedPerson] = useState({});
  //   const selPerson = {
  //     name: selectedPerson.name,
  //     category: selectedPerson.category,
  //     fees: selectedPerson.fees,
  //   };
  const [phoneNumber, setPhoneNumber] = useState();

  const FeesHandle = (e) => {
    e.preventDefault();
    console.log(selectedPerson);
    axios
      .post("http://localhost:3000/api/v1/donate/fees", {
        studentName: selectedPerson.name,
        category: selectedPerson.category,
        fees: selectedPerson.fees,
        phoneNumber,
      })
      .then((result) => {
        console.log(result);
        navigate("/fees");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative z-1 max-w-[60rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <div className="w-[30rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 backdrop-blur-sm ">
        <Heading
          className="md:max-2-md lg:max-w-2xl"
          title="Student's Fees Donation"
        />
        <form className="flex flex-col" action="post" onSubmit={FeesHandle}>
          <input
            placeholder="Phone Number"
            className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <ScholarshipTable onFeesSelect={handleFeesSelection} />

          {selectedPerson && (
            <div className="mb-5">
              <h3 className="text-lg font-semibold">
                Selected Student: {selectedPerson.name}
              </h3>
              <p>Category: {selectedPerson.category}</p>
              <p>Fees: ${selectedPerson.fees}</p>
            </div>
          )}
          <Button className="hidden lg:flex">Pay</Button>
        </form>
      </div>
    </div>
  );
};

export default Fees;
