import { useState, useEffect } from "react";

const DonationHistory = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const response = await fetch("/api/v1/donate/getHistory");
        const data = await response.json();
        setFees(data);
      } catch (error) {
        console.error("Error fetching fees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Fees History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-n-7 border border-gray-300">
          <thead>
            <tr className="bg-n-7">
              <th className="px-6 py-3 border-b text-left w-1/4">
                Student Name
              </th>
              <th className="px-6 py-3 border-b text-left w-1/4">Category</th>
              <th className="px-6 py-3 border-b text-left w-1/4">
                Fees Amount
              </th>
              <th className="px-6 py-3 border-b text-left w-1/4">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee._id} className="">
                <td className="px-6 py-4 border-b whitespace-nowrap">
                  {fee.studentName}
                </td>
                <td className="px-6 py-4 border-b whitespace-nowrap">
                  {fee.category}
                </td>
                <td className="px-6 py-4 border-b whitespace-nowrap">
                  ₹{fee.fees.toFixed(2)}
                </td>
                <td className="px-6 py-4 border-b whitespace-nowrap">
                  {fee.phoneNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationHistory;
