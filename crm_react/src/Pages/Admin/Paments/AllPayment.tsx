import img_Lock from "../../../assets/images/lock.svg";
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import ArrowSwitch from "../../../assets/images/arrow_Switch.svg";
import ViewIcon from "../../../assets/images/view_icon.svg";
import FilterIcon from "../../../assets/images/filter_icon.svg";
import { Pagination } from "flowbite-react";

import { useState } from "react";
import PaymentFilterModal from "../../../components/Modal/PaymentFilterModal";

const AllPayment = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);


  return (
    <div>
      <div className="bg-zinc-100 rounded-tl-xl rounded-tr-xl flex items-center justify-between p-6">

        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
            <img
              src={BreackIcon}
              className="w-7 h-7"
              alt="Create new folder"
            />
          </div>
          <span className="justify-start text-black text-xl font-semibold font-['Poppins']">
            All Payments
          </span>
        </div>

        <button
          onClick={() => setOpenFilter(true)}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 rounded-lg cursor-pointer"
        >
          <img src={FilterIcon} alt="Lock Folder" className="w-5 h-5" />
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
      <div className="bg-white">
        <div className="relative overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full text-sm text-left border-collapse border border-neutral-200 rounded-lg">
            <thead className="text-Input-Lable-Color text-sm font-medium font-['Poppins'] leading-6">
              <tr className="bg-white">
                <th scope="col" className="px-6 py-4 border border-neutral-200">
                  <div className="flex items-center space-x-2">
                    <span>#</span>
                    <img src={ArrowSwitch} alt="sort icon" />
                  </div>
                </th>

                <th scope="col" className="px-6 py-4 border border-neutral-200">
                  <div className="flex items-center space-x-2">
                    <span>Folder</span>
                    <img src={ArrowSwitch} alt="sort icon" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 border border-neutral-200">
                  <div className="flex items-center space-x-2">
                    <span>Payments</span>
                    <img src={ArrowSwitch} alt="sort icon" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 border border-neutral-200">Payment Date</th>
                <th scope="col" className="px-6 py-4 border border-neutral-200">Payment Mode</th>
                <th scope="col" className="px-6 py-4 border border-neutral-200">Proof</th>
                <th scope="col" className="px-6 py-4 border border-neutral-200">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white">

                <td className="px-6 py-4 border border-neutral-200">1</td>

                <td className="px-6 py-4 border border-neutral-200">1289</td>
                <td className="px-6 py-4 border border-neutral-200">£312.37</td>
                <td className="px-6 py-4 border border-neutral-200">20-08-2025</td>
                <td className="px-6 py-4 border border-neutral-200">Network Transfer</td>
                <td className="px-6 py-4 border border-neutral-200">
                  <div className="h-7 px-2.5 py-2  bg-blue-100 rounded-md inline-flex justify-center items-center">
                    <span className="text-sky-500 text-xs font-medium font-['Poppins'] leading-6 flex gap-2 items-center justify-center cursor-pointer">
                      View
                      <img src={ViewIcon} alt="View Icon" />
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border border-neutral-200">
                  <div className="h-7 px-2.5 py-2 bg-green-100 rounded-md inline-flex justify-center items-center">
                    <span className="text-green-800 text-xs font-medium font-['Poppins'] leading-6">Approved</span>
                  </div>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 border border-neutral-200">2</td>
                <td className="px-6 py-4 border border-neutral-200">1289</td>
                <td className="px-6 py-4 border border-neutral-200">£312.37</td>
                <td className="px-6 py-4 border border-neutral-200">20-08-2025</td>
                <td className="px-6 py-4 border border-neutral-200">Network Transfer</td>
                <td className="px-6 py-4 border border-neutral-200">
                  <div className="h-7 px-2.5 py-2  bg-blue-100 rounded-md inline-flex justify-center items-center">
                    <span className="text-sky-500 text-xs font-medium font-['Poppins'] leading-6 flex gap-2 items-center justify-center cursor-pointer">
                      View
                      <img src={ViewIcon} alt="View Icon" />
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border border-neutral-200">
                  {/* <div className="h-7 px-2.5 py-2 bg-green-100 rounded-md inline-flex justify-center items-center">
                    <span className="text-green-800 text-xs font-medium font-['Poppins'] leading-6">Approved</span>
                  </div> */}
                  <div className="h-7 px-2.5 py-2 bg-amber-200 rounded-md inline-flex justify-center items-center">
                    <span className="text-green-800 text-xs font-medium font-['Poppins'] leading-6">Pending</span>
                  </div>
                </td>



              </tr>

              <tr className="bg-white">
                <td className="px-6 py-4 border border-neutral-200">2</td>
                <td className="px-6 py-4 border border-neutral-200">1289</td>
                <td className="px-6 py-4 border border-neutral-200">£312.37</td>
                <td className="px-6 py-4 border border-neutral-200">20-08-2025</td>
                <td className="px-6 py-4 border border-neutral-200">Network Transfer</td>
                <td className="px-6 py-4 border border-neutral-200">
                  <div className="h-7 px-2.5 py-2  bg-blue-100 rounded-md inline-flex justify-center items-center">
                    <span className="text-sky-500 text-xs font-medium font-['Poppins'] leading-6 flex gap-2 items-center justify-center cursor-pointer">
                      View
                      <img src={ViewIcon} alt="View Icon" />
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 border border-neutral-200 flex items-center gap-2">
                  <div className="h-7 px-2.5 py-2 bg-green-800 rounded-md inline-flex justify-center items-center">
                    <span className="text-white text-xs font-medium font-['Poppins'] leading-6">Approve</span>
                  </div>
                  <div className="h-7 px-2.5 py-2 bg-red-700 rounded-md inline-flex justify-center items-center">
                    <span className="text-white text-xs font-medium font-['Poppins'] leading-6">Reject</span>
                  </div>
                </td>



              </tr>


            </tbody>
          </table>
        </div>


      </div>
      <div className="flex overflow-x-auto">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />

      </div>
    </div>
  )
}

export default AllPayment