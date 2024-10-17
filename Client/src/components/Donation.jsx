import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
// import { Link } from "react-router-dom";
import ScholarshipTable from "./ScholarshipTable";
// import { useState } from "react";

const Donation = () => {
  // const [selectedFees, setSelectedFees] = useState(0);
  // const handleFeesSelection = (fees, e) => {
  //   setSelectedFees(fees);
  //   e.preventDefault(); // Update fees when a scholarship is selected
  // };

  return (
    <Section>
      {/* <div className="flex flex-wrap gap-40 mb-10 justify-center"> */}
      {/* First Form */}

      <div className="relative z-1 max-w-[35rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className="w-[10em] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 backdrop-blur-sm ">
          <Heading
            className="md:max-2-md lg:max-w-2xl"
            title="Infrastructure 
            Donation"
          />
          <form className="flex flex-col" action="post">
            <input
              placeholder="Phone Number "
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="tel"
              name="password"
            />
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="infrastructure"
              name="infrastructure"
              required
            >
              <option value="">Select Infrastructure to Donate</option>
              <option value="male">Systems</option>
              <option value="female">Desks</option>
              <option value="other">Plants</option>
            </select>
            <input
              placeholder="Quantity"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="number"
              name="quantity"
              required
            />
            <Button className="hidden lg:flex">Donate</Button>
          </form>
        </div>
      </div>

      {/* Second Form */}
      <div className="relative z-1 max-w-[60rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <div className="w-[30rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 backdrop-blur-sm ">
          <Heading
            className="md:max-2-md lg:max-w-2xl"
            title="Student's Fees Donation"
          />
          <form className="flex flex-col" action="post">
            <input
              placeholder="Phone Number"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="telephone"
              name="PhoneNo"
              required
            />
            <input
              placeholder="Password"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="password"
              name="password"
            />
            <ScholarshipTable />
            {/* onFeesSelect={handleFeesSelection}  */}
            {/* {selectedFees > 0 && ( // Only show if there are fees to display
              <div className="mt-4">
                <h3 className="text-lg font-semibold">
                  Total Fees to Pay: ${selectedFees}
                </h3>
              </div>
            )} */}
            <Button className="hidden lg:flex" href="#">
              Pay
            </Button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default Donation;
