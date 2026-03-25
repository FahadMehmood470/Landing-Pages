import BreackIcon from "../../../assets/images/details_Breakdown.svg";
// import ArrowSwitch from "../../../assets/images/arrow_Switch.svg";
import ViewIcon from "../../../assets/images/view_icon.svg";
import { Pagination } from "flowbite-react";
import Swal from "sweetalert2";
import { useState } from "react";

const RejectedPayments = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [payments, setPayments] = useState([
    {
      id: 1,
      folder: 1289,
      payment: "£312.37",
      date: "20-08-2025",
      mode: "Network Transfer",
      status: "Rejected",
    },
    {
      id: 2,
      folder: 1290,
      payment: "£222.00",
      date: "22-08-2025",
      mode: "Bank Transfer",
      status: "Rejected",
    },
  ]);

  const onPageChange = (page: number) => setCurrentPage(page);

  // ✅ DELETE FUNCTION with SweetAlert confirmation
  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to recover this record!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPayments(payments.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "The record has been removed.", "success");
      }
    });
  };

  return (
    <div>
      <div className="bg-zinc-100 rounded-tl-xl rounded-tr-xl flex items-center justify-between p-6">
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
            <img src={BreackIcon} className="w-7 h-7" alt="Create new folder" />
          </div>
          <span className="text-black text-xl font-semibold font-['Poppins']">
            Rejected Payments
          </span>
        </div>
      </div>

      <div className="bg-white">
        <div className="relative overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full text-sm text-left border-collapse border border-neutral-200 rounded-lg">
            <thead className="text-Input-Lable-Color text-sm font-medium font-['Poppins'] leading-6">
              <tr className="bg-white">
                <th className="px-6 py-4 border border-neutral-200">#</th>
                <th className="px-6 py-4 border border-neutral-200">Folder</th>
                <th className="px-6 py-4 border border-neutral-200">Payments</th>
                <th className="px-6 py-4 border border-neutral-200">Payment Date</th>
                <th className="px-6 py-4 border border-neutral-200">Payment Mode</th>
                <th className="px-6 py-4 border border-neutral-200">Proof</th>
                <th className="px-6 py-4 border border-neutral-200">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((item, index) => (
                <tr key={item.id} className="bg-white">
                  <td className="px-6 py-4 border border-neutral-200">{index + 1}</td>
                  <td className="px-6 py-4 border border-neutral-200">{item.folder}</td>
                  <td className="px-6 py-4 border border-neutral-200">{item.payment}</td>
                  <td className="px-6 py-4 border border-neutral-200">{item.date}</td>
                  <td className="px-6 py-4 border border-neutral-200">{item.mode}</td>
                  <td className="px-6 py-4 border border-neutral-200">
                    <div className="h-7 px-2.5 py-2 bg-blue-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-sky-500 text-xs font-medium font-['Poppins'] flex gap-2 items-center cursor-pointer">
                        View
                        <img src={ViewIcon} alt="View Icon" />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border border-neutral-200 flex items-center gap-2">
                    <div
                      onClick={() => handleDelete(item.id)}
                      className="h-7 px-2.5 py-2 bg-zinc-500/10 rounded-md inline-flex justify-center items-center cursor-pointer hover:bg-red-200"
                    >
                      <span className="text-red-600 text-xs font-medium font-['Poppins'] leading-4">
                        Delete
                      </span>
                    </div>

                    <div className="h-7 px-2.5 py-2 bg-red-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-red-700/60 text-xs font-medium font-['Poppins'] leading-6">
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex overflow-x-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default RejectedPayments;
