import { useState } from 'react'
import LeadsIcon from "../../../assets/images/Leads_w.svg";
import FilterIcon from "../../../assets/images/filter_icon.svg";
import FilterModal from '../../../components/Modal/filterModal';
import { Pagination } from "flowbite-react";
import EdittIcon from "../../../assets/images/edit_icon.svg";
import PrintIcon from "../../../assets/images/Print_icon_blue.svg";

const NewLeads = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div className="container mx-auto py-5">
      <div className="bg-[#F0F0F0] rounded-xl p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={LeadsIcon} className="w-7 h-7" alt="Create new folder" />
            </div>

            <div>
              <span className="text-black text-xl font-semibold font-poppins">
                New Leads
              </span>
              <p className="ptext-subheading-color text-base font-normal font-inter">
                A list of all new leads added to your pipeline.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-3 bg-sky-500  rounded-lg cursor-pointer" onClick={() => setOpenFilter(true)}>
            <img src={FilterIcon} alt="FilterIcon" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins">
              Filter
            </span>
          </div>
          {openFilter && (
            <FilterModal
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
            />
          )}

        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-gray-50 mt-6">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-Text-Normal text-sm font-normal font-['Inter'] leading-6">
            <thead className="text-Text-Normal text-xs font-medium font-['Inter'] leading-5 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Lead No
                </th>
                <th scope="col" className="px-6 py-3">
                  Lead Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Leading Passenger
                </th>
                <th scope="col" className="px-6 py-3">
                  E-Mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier Ref #
                </th>
                <th scope="col" className="px-6 py-3">
                  Order Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Travel Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-normal text-Text-Normal whitespace-nowrap dark:text-white"
                >
                  3241
                </th>
                <td className="px-6 py-4">06/18/2025</td>
                <td className="px-6 py-4">
                  Alyvia Kelley <br />
                  +92 300 0209425
                </td>
                <td className="px-6 py-4">$a.kelley@gmail.com</td>
                <td className="px-6 py-4">181573</td>

                <td className="px-6 py-4">Umrah</td>
                <td className="px-6 py-4">Safa Marwa & Tours</td>

                <td className="px-6 py-4">
                  Asim Khalild <br />
                  asim@alharamaintravel.co.uk
                </td>

                <td className="px-6 py-4">06/18/2025</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={EdittIcon} alt="Edit" />
                  <img src={PrintIcon} alt="Print" />
                  <a
                    href="#"
                    className="text-rose-500 text-base font-medium font-['Inter'] underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex overflow-x-auto">
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />
             
          </div>
        </div>
    </div>
  )
}

export default NewLeads