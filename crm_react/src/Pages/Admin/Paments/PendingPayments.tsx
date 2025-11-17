import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import ViewIcon from "../../../assets/images/view_icon.svg";
import FilterIcon from "../../../assets/images/filter_icon.svg";
import { Pagination } from "flowbite-react";
import Swal from "sweetalert2";
import { useState } from "react";
import PaymentFilterModal from "../../../components/Modal/PaymentFilterModal";

const PendingPayments = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [payments, setPayments] = useState([
    {
      id: 1,
      folder: 1289,
      payment: "£312.37",
      date: "20-08-2025",
      mode: "Network Transfer",
      status: "Pending",
    },
    {
      id: 2,
      folder: 1290,
      payment: "£220.00",
      date: "25-08-2025",
      mode: "Bank Transfer",
      status: "Pending",
    },
    {
      id: 3,
      folder: 1300,
      payment: "£100.00",
      date: "26-08-2025",
      mode: "PayPal",
      status: "Pending",
    },
  ]);

  const onPageChange = (page: number) => setCurrentPage(page);

  // ✅ Handle Approve
  const handleApprove = (id: number) => {
    Swal.fire({
      title: "Approve Payment?",
      text: "Do you want to mark this payment as approved?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPayments((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: "Approved" } : item
          )
        );
        Swal.fire("Approved!", "The payment has been approved.", "success");
      }
    });
  };

  // ✅ Handle Reject
  const handleReject = (id: number) => {
    Swal.fire({
      title: "Reject Payment?",
      text: "Do you want to reject this payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setPayments((prev) =>
          prev.filter((item) => item.id !== id)
        );
        Swal.fire("Rejected!", "The payment has been rejected and removed.", "success");
      }
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-zinc-100 rounded-tl-xl rounded-tr-xl flex items-center justify-between p-6">
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
            <img src={BreackIcon} className="w-7 h-7" alt="Create new folder" />
          </div>
          <span className="text-black text-xl font-semibold font-['Poppins']">
            Pending Payments
          </span>
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setOpenFilter(true)}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 rounded-lg cursor-pointer"
        >
          <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
          <span className="text-white text-base font-medium font-poppins leading-tight">
            Filter
          </span>
        </button>

        {openFilter && (
          <PaymentFilterModal
            openFilter={openFilter}
            setOpenFilter={setOpenFilter}
          />
        )}
      </div>

      {/* Table */}
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
                    {item.status === "Pending" ? (
                      <>
                        <div
                          onClick={() => handleApprove(item.id)}
                          className="h-7 px-2.5 py-2 bg-green-800 rounded-md inline-flex justify-center items-center cursor-pointer hover:bg-green-700"
                        >
                          <span className="text-white text-xs font-medium font-['Poppins'] leading-6">
                            Approve
                          </span>
                        </div>

                        <div
                          onClick={() => handleReject(item.id)}
                          className="h-7 px-2.5 py-2 bg-red-700 rounded-md inline-flex justify-center items-center cursor-pointer hover:bg-red-800"
                        >
                          <span className="text-white text-xs font-medium font-['Poppins'] leading-6">
                            Reject
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="h-7 px-2.5 py-2 bg-green-100 rounded-md inline-flex justify-center items-center">
                        <span className="text-green-700 text-xs font-medium font-['Poppins'] leading-6">
                          {item.status}
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
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

export default PendingPayments;
