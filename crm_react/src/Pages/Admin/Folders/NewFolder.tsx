import img_Lock from "../../../assets/images/lock.svg"
import newFolder from "../../../assets/images/manage_Folder.svg"
import dropdownIcon from "../../../assets/images/dropdownIcon.svg";
import AerolplaneIcon from "../../../assets/images/aerolpane.svg";
import AddIcon from "../../../assets/images/Add_icon.svg";
import DeleateIcon from "../../../assets/images/deleate_icon.svg";
import PassangerIcon from "../../../assets/images/passanger_icon.svg";
import TicketIcon from "../../../assets/images/ticketIcon.svg";
import HotelIcon from "../../../assets/images/Hotel_Icon.svg";
import TransportIcon from "../../../assets/images/Transport_icon.svg";
import DetailsIcon from "../../../assets/images/Other_details.svg";
import ZiarahIcon from "../../../assets/images/Ziarah.svg";
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import InvoiceIcon from "../../../assets/images/invoice_icon.svg";
import PrintIcon from "../../../assets/images/print_icon.svg";
import { useState } from "react";






const NewFolder = () => {
  const itinerariesFields = [
    { label: "Sr No", type: "input" },
    { label: "Airline Code", type: "input" },
    { label: "Flight Number", type: "input" },
    {
      label: "Class",
      type: "select",
      options: ["Economy", "Business", "First Class"]
    },
    { label: "Departure Date", type: "date" },
    { label: "Dep Airport", type: "input" },
    { label: "Departure Time", type: "time" },
    { label: "Arrival Date", type: "date" },
    { label: "Arrival Airport", type: "input" },
    { label: "Arrival Time", type: "time" },
  ];



  const [itineraries, setItineraries] = useState([{ id: 1 }]); // Start with one row

  const addItinerary = () => {
    setItineraries([...itineraries, { id: Date.now() }]);
  };

  const deleteItinerary = (id: number) => {
    setItineraries(itineraries.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto py-5 ">
      <div className="bg-white rounded-xl flex items-center justify-between p-6">

        <div className="">
          <div className="text-black text-xl font-semibold font-['Poppins']">Manage Folders</div>
          <div className="text-subheading-color text-base font-normal font-['Inter'] mt-2">Quickly manage folders for better organization.</div>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 rounded-lg cursor-pointer">
          <img src={img_Lock} alt="Lock Folder" className="w-5 h-5" />
          <span className="text-white text-base font-medium font-poppins leading-tight">
            Lock Folder
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl mt-12 p-6">
        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
            <img src={newFolder} className="w-7 h-7" alt="Create new folder" />
          </div>
          <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Add New Folder</span>
        </div>
        <h2 className="text-subheading-color text-base font-normal font-['Poppins'] mt-8">Add New Folder</h2>

        <div className="grid grid-cols-4 gap-5 pt-8 ">
          <div className="inline-block">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Order Type</label>

            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  backgroundImage: "none",
                }}
              >
                <option>January - June 2022</option>
                <option>July - December 2022</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
              </div>
            </div>
          </div>

          <div className="">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Vendor Reference</label>
            <input
              type="text"
              placeholder="e.g., VNDR-12345"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="inline-block">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Company / Branch</label>

            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  backgroundImage: "none",
                }}
              >
                <option>January - June 2022</option>
                <option>July - December 2022</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
              </div>
            </div>
          </div>
          <div className="">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Vendor Reference</label>
            <input
              type="text"
              placeholder="e.g., VNDR-12345"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="inline-block">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Order Type</label>

            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  backgroundImage: "none",
                }}
              >
                <option>January - June 2022</option>
                <option>July - December 2022</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
              </div>
            </div>
          </div>

          <div className="">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Vendor Reference</label>
            <input
              type="text"
              placeholder="e.g., VNDR-12345"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="inline-block">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Company / Branch</label>

            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  backgroundImage: "none",
                }}
              >
                <option>January - June 2022</option>
                <option>July - December 2022</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
              </div>
            </div>
          </div>
          <div className="">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Vendor Reference</label>
            <input
              type="text"
              placeholder="e.g., VNDR-12345"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="">
            <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Vendor Reference</label>
            <input
              type="text"
              placeholder="e.g., VNDR-12345"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


        </div>

      </div>

      <div className="bg-white rounded-xl mt-12 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <button className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={AerolplaneIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="text-black text-xl font-semibold font-['Poppins']">
              Add New Itinerary
            </span>
          </button>
          <div
            className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer"
            onClick={addItinerary}
          >
            <img src={AddIcon} alt="Add" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Itinerary
            </span>
          </div>
        </div>

        {/* Itinerary Rows */}
        {itineraries.map((item, index) => (
          <div key={item.id} className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-subheading-color text-base font-normal font-['Poppins']">
                Flight #{index + 1}
              </h2>
              <img
                src={DeleateIcon}
                onClick={() => deleteItinerary(item.id)}
                className="p-2 bg-red-50 cursor-pointer rounded"
                alt="Delete"
              />
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-10 gap-4">
              {
                itinerariesFields.map((field) => (
                  <div key={field.label}>
                    <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={`Enter ${field.label}`}
                        className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}

                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>




      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={PassangerIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Passenger Details</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={AddIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Passenger
            </span>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Flight #1</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-8 gap-4 pt-8 ">
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Dep Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Date</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
            <input
              type="text"
              placeholder="Passport Details"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

      </div>

      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={TicketIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Ticket/Package Cost</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={AddIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Ticket
            </span>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Flight #1</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-5 gap-4 pt-8 ">
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Dep Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Date</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

      </div>


      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={HotelIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Hotel Details</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={AddIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Hotel
            </span>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Flight #1</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-5 gap-4 pt-8 ">
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Dep Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Date</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
              <input
                type="text"
                placeholder="Passport Details"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

      </div>

      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={TransportIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Transport Details</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={AddIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Transport
            </span>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Flight #1</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-8 gap-4 pt-8 ">
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Dep Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Date</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
            <input
              type="text"
              placeholder="Passport Details"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

      </div>

      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={DetailsIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Others Details</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={AddIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Add New Other Details
            </span>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Flight #1</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-4 gap-4 pt-8 ">




            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Departure Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Date</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Airport</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="">
              <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Arrival Time</label>
              <input
                type="text"
                placeholder="e.g., VNDR-12345"
                className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">Passport Details</label>
            <input
              type="text"
              placeholder="Passport Details"
              className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

      </div>




      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={ZiarahIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Ziaraats</span>
          </div>

        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Configure religious tour packages and pilgrimage services for Makkah and Madinah</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>
          <div className="grid grid-cols-2 gap-5 pt-8 ">
            <div className="inline-block">
              <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Order Type</label>

              <div className="relative">
                <select
                  className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    backgroundImage: "none",
                  }}
                >
                  <option>January - June 2022</option>
                  <option>July - December 2022</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
                </div>
              </div>
            </div>



            <div className="inline-block">
              <label className="block mb-1 text-zinc-800 text-base font-medium font-['Poppins']">Company / Branch</label>

              <div className="relative">
                <select
                  className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    backgroundImage: "none",
                  }}
                >
                  <option>January - June 2022</option>
                  <option>July - December 2022</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="px-4 py-3 bg-black rounded-lg cursor-pointer w-32 mt-6">
          <span className="text-white text-base font-medium font-poppins leading-tight">
            Save Folder
          </span>
        </div>


      </div>




      <div className=" rounded-xl mt-12">
        <div className="flex justify-between items-center pb-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img src={BreackIcon} className="w-7 h-7" alt="Create new folder" />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">Detailed Financial Breakdown
            </span>
          </div>

        </div>
        <div className="bg-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-subheading-color text-base font-normal font-['Poppins']">Detailed Financial Breakdown</h2>
            <img src={DeleateIcon} className="p-2 bg-red-50 cursor-pointer" alt="Delete" />
          </div>


          <div className="relative overflow-x-auto mt-5 border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left border-collapse border border-neutral-200 rounded-lg">
              <thead className="text-Input-Lable-Color text-base font-medium font-['Inter'] leading-6">
                <tr className="bg-neutral-100">
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Category</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Payment Heads</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Passengers</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Hotels</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Transport</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Others</th>
                  <th scope="col" className="px-6 py-4 border border-neutral-200">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white">
                  <th scope="row" className="px-6 py-4 border border-neutral-200 text-Input-Lable-Color text-base font-medium font-['Poppins'] leading-6 flex gap-1 items-center">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div> Revenue
                  </th>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">
                    <div className="h-6 px-2.5 py-2 bg-green-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-green-800 text-base font-medium font-['Poppins'] leading-6">£0</span>
                    </div>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th scope="row" className="px-6 py-4 border border-neutral-200 text-Input-Lable-Color text-base font-medium font-['Poppins'] leading-6 flex gap-1 items-center">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div> Costs
                  </th>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">
                    <div className="h-6 px-2.5 py-2 bg-red-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-green-800 text-base font-medium font-['Poppins'] leading-6">£0</span>
                    </div>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th scope="row" className="px-6 py-4 border border-neutral-200 text-Input-Lable-Color text-base font-medium font-['Poppins'] leading-6 flex gap-1 items-center">
                    <div className="w-2.5 h-2.5 bg-sky-500 rounded-full"></div> Profit
                  </th>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">
                    <div className="h-6 px-2.5 py-2 bg-sky-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-green-800 text-base font-medium font-['Poppins'] leading-6">£0</span>
                    </div>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th scope="row" className="px-6 py-4 border border-neutral-200 text-Input-Lable-Color text-base font-medium font-['Poppins'] leading-6 flex gap-1 items-center">
                    <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div> Outstanding
                  </th>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">£0</td>
                  <td className="px-6 py-4 border border-neutral-200">
                    <div className="h-6 px-2.5 py-2 bg-amber-100 rounded-md inline-flex justify-center items-center">
                      <span className="text-green-800 text-base font-medium font-['Poppins'] leading-6">£0</span>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>


        </div>

        <div className="flex gap-2 mt-12">
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
            <img src={InvoiceIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Make Invoice
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 rounded-lg cursor-pointer">
            <img src={PrintIcon} alt="Lock Folder" className="w-5 h-5" />
            <span className="text-white text-base font-medium font-poppins leading-tight">
              Print Invoice
            </span>
          </div>
        </div>


      </div>



    </div>
  )
}

export default NewFolder