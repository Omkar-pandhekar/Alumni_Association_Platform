

import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import axios from  'axios';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import ScholarshipTable from "./ScholarshipTable";
import { useState } from "react";
// import { useState } from "react";

const Donation = () => {
  // const [selectedFees, setSelectedFees] = useState(0);
  // const handleFeesSelection = (fees, e) => {
  //   setSelectedFees(fees);
  //   e.preventDefault(); // Update fees when a scholarship is selected
  // };
  const [phoneNumber,setPhoneNumber] = useState();
  const [item,setItem] = useState();
  const [quantity,setQuantity] = useState();
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    

    axios
      .post("http://localhost:3000/api/v1/donate/donation", {
        phoneNumber,
        item,
        quantity
      })
      .then((result) => {
        console.log(result);
        navigate("/donation");
      })
      .catch((err) => console.log(err));
  }




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
          <form className="flex flex-col" action="post" onSubmit={HandleSubmit}>
            <input
              placeholder="Phone Number "
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="tel"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}

            />
            <select
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              id="infrastructure"
              name="item"
              value={item}
              onChange={e => setItem(e.target.value)}
              required
            >
              <option value="">Select Infrastructure to Donate </option>
              <option value="systems">Systems</option>
              <option value="Desks">Desks</option>
              <option value="plants">Plants</option>
            </select>
            <input
              placeholder="Quantity"
              className="bg-n-7 text-n-3 border-0 rounded-md p-2 mb-4 focus:bg-n-7 focus:outline-none focus:ring-1 focus:ring-n-5 transition ease-in-out duration-150"
              type="number"
              name="quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
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
            {/* onFeesSelect={handleFeesSelection} 
            {selectedFees > 0 && ( // Only show if there are fees to display
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

