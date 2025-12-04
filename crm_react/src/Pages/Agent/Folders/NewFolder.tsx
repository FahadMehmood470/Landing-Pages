// src/components/NewFolderFull.tsx
import React, { useState } from "react";
import img_Lock from "../../../assets/images/lock.svg";
// import newFolder from "../../../assets/images/manage_Folder.svg";
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
import { Button, Label, TextInput } from "flowbite-react";



type Field = {
  name: string;
  label: string;
  type: "text" | "number" | "date" | "time" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  colSpan?: number;
};

type Section = {
  id: string;
  title: string;
  description?: string;
  icon: string;
  buttonLabel?: string;
  gridCols?: number;
  fields: Field[];
};

const sections: Section[] = [
  {
    id: "manageFolder",
    title: "Manage Folders",
    description: "Quickly manage folders for better organization.",
    icon: img_Lock,
    buttonLabel: "Lock Folder",
    gridCols: 4,
    fields: [
      { name: "orderType", label: "Order Type", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "vendorRef", label: "Vendor Reference", type: "text", placeholder: "e.g., VNDR-12345" },
      { name: "companyBranch", label: "Company / Branch", type: "select", options: ["Branch A", "Branch B"] },
      { name: "bookedBy", label: "Booked By", type: "text", placeholder: "Select booking agent / staff" },
      { name: "Status", label: "Status", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "Destination", label: "Destination", type: "text", placeholder: "Select travel destination" },
      { name: "TravelDate", label: "TravelDate", type: "date", placeholder: "Select travel destination" },
      { name: "BalanceDueDate", label: "Balance Due Date", type: "date", placeholder: "Select payment due date" },
      { name: "FlightItinerary", label: "Flight Itinerary", type: "number", placeholder: "Enter Flight Itinerary Number" },
    ],
  },

  {
    id: "itinerary",
    title: "Add New Itinerary",
    icon: AerolplaneIcon,
    buttonLabel: "Add New Itinerary",
    gridCols: 10,
    fields: [
      { name: "srNo", label: "Sr No", type: "text", placeholder: "" },
      { name: "airlineCode", label: "Airline Code", type: "text", placeholder: "" },
      { name: "flightNumber", label: "Flight Number", type: "text", placeholder: "" },
      { name: "class", label: "Class", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "departureDate", label: "Departure Date", type: "date" },
      { name: "depAirport", label: "Dep Airport", type: "text", placeholder: "" },
      { name: "departureTime", label: "Departure Time", type: "time" },
      { name: "arrivalDate", label: "Arrival Date", type: "date" },
      { name: "arrivalAirport", label: "Arrival Airport", type: "text", placeholder: "" },
      { name: "arrivalTime", label: "Arrival Time", type: "time" },
    ],
  },

  {
    id: "passenger",
    title: "Passenger Details",
    icon: PassangerIcon,
    buttonLabel: "Add New Passenger",
    gridCols: 8,
    fields: [
      { name: "title", label: "Title", type: "text", placeholder: "Title" },
      { name: "firstName", label: "First Name", type: "text", placeholder: "First Name" },
      { name: "middleName", label: "Middle Name", type: "text", placeholder: "Middle Name" },
      { name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name" },
      { name: "passengerType", label: "Passenger Type", type: "text", placeholder: "Passenger Type" },
      { name: "email", label: "Email", type: "text", placeholder: "Example@gmail.com" },
      { name: "phoneNo.", label: "Phone No.", type: "number", placeholder: "000-000-0000" },
      { name: "dateofBirth", label: "Date of Birth", type: "date", placeholder: "20/08/1980" },
      { name: "passportDetails", label: "Passport Details", type: "text", placeholder: "Enter Your Password  Details and others", colSpan: 8 },
    ],
  },

  {
    id: "ticket",
    title: "Ticket/Package Cost",
    icon: TicketIcon,
    buttonLabel: "Add New Ticket",
    gridCols: 5,
    fields: [
      { name: "ticketNumber", label: "Ticket Number", type: "text", colSpan: 1 },
      { name: "ticketDate", label: "Ticket Date", type: "date", colSpan: 1 },
      { name: "PNR", label: "PNR", type: "number", colSpan: 1 },
      { name: "From", label: "From", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "to", label: "To", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "baseFare", label: "Base Fare", type: "number", colSpan: 1 },
      { name: "tax&Fees", label: "Tax & Fees", type: "number", colSpan: 1 },
      { name: "totalCost", label: "Total Cost", type: "number", colSpan: 1 },
      { name: "sellPrice", label: "Sell Price", type: "number", colSpan: 1 },
      { name: "Margin", label: "Margin", type: "number", colSpan: 1 },
      { name: "Supplier", label: "Supplier", type: "text", colSpan: 1 },
    ],
  },

  {
    id: "hotel",
    title: "Hotel Details",
    icon: HotelIcon,
    buttonLabel: "Add New Hotel",
    gridCols: 5,
    fields: [
      { name: "Supplier", label: "Supplier", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "hotelName", label: "Hotel Name", type: "text", colSpan: 1 },
      { name: "guestName", label: "Guest Name", type: "text", colSpan: 1 },
      { name: "hotelCity", label: "Hotel City", type: "text", colSpan: 1 },
      { name: "no.ofRooms", label: "No. of Rooms", type: "number" },
      { name: "roomType", label: "Room Type", type: "text", colSpan: 1 },
      { name: "supplierRef", label: "Supplier Ref", type: "number", colSpan: 1 },
      { name: "Meals", label: "Meals", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "dateIn", label: "Date In", type: "date", colSpan: 1 },
      { name: "dateOut", label: "Date Out", type: "date", colSpan: 1 },
      { name: "Nights", label: "Nights", type: "number", colSpan: 1 },
    ],
  },

  {
    id: "transport",
    title: "Transport Details",
    icon: TransportIcon,
    buttonLabel: "Add New Transport",
    gridCols: 9,
    fields: [
      { name: "Supplier", label: "Supplier", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "vehicleType", label: "Vehicle Type", type: "select", options: ["Economy", "Business", "First Class"] },
      { name: "Date", label: "Date", type: "date" },
      { name: "pickupTime", label: "Pickup Time", type: "text" },
      { name: "From", label: "From", type: "date" },
      { name: "To", label: "To", type: "date" },
      { name: "Cost", label: "Cost", type: "number" },
      { name: "Margin", label: "Margin", type: "number" },
      { name: "sellPrice", label: "Sell Price", type: "number" },
      { name: "Description", label: "Description", type: "text", colSpan: 8 },
    ],
  },

  {
    id: "Visas",
    title: "Visas",
    icon: ZiarahIcon,
    buttonLabel: "Add New Other Details",
    gridCols: 2,

    fields: [
      { name: "visaCategory", label: "Visa Category", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "visaAmount", label: "Visa Amount", type: "select", options: ["Branch A", "Branch B"] },
    ],
  },

  {
    id: "ziaraats",
    title: "Ziaraats",
    icon: ZiarahIcon,
    gridCols: 2,
    description: "Configure religious tour packages and pilgrimage services for Makkah and Madinah",
    fields: [
      { name: "ziaraatsMakkah", label: "Ziaraats Makkah", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "ziaraatsMadina", label: "Ziaraats Madina", type: "select", options: ["Branch A", "Branch B"] },
    ],
  },

  {
    id: "others",
    title: "Others Details",
    icon: DetailsIcon,
    buttonLabel: "Add New Other Details",
    gridCols: 4,
    fields: [
      { name: "Supplier", label: "Supplier", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "vehicleType", label: "Vehicle Type", type: "select", options: ["January - June 2022", "July - December 2022"] },
      { name: "Date", label: "Date", type: "date" },
      { name: "pickupTime", label: "Arrival Time", type: "time" },
      { name: "Description", label: "Description", type: "text", colSpan: 4 },
    ],
  },


];

const NewFolderFull: React.FC = () => {
  const initialEntriesState = sections.reduce<Record<string, any[]>>((acc, section) => {
    const defaultItem = section.fields.reduce<Record<string, any>>((obj, f) => {
      obj[f.name] = "";
      return obj;
    }, {});
    acc[section.id] = [{ id: Date.now() + Math.random(), ...defaultItem }];
    return acc;
  }, {});

  const [entries, setEntries] = useState<Record<string, any[]>>(initialEntriesState);
  const [showAfterSave, setShowAfterSave] = useState(false);
  const [showAdvancePayment, setShowAdvancePayment] = useState(false);
  const [advancePaymentData, setAdvancePaymentData] = useState({
    amount: "",
    date: "",
    mode: "",
  });
  const [finalValues, setFinalValues] = useState({
    revenue: 0,
    hotels: 0,
    transport: 0,
    others: 0,
    total: 0,
  });

  const handleSaveAll = () => {
    setShowAfterSave(true);
    setShowAdvancePayment(true);
  };
  const handleCancelAdvance = () => {
    setShowAdvancePayment(false);
  };

  const addItem = (sectionId: string) => {
    setEntries((prev) => {
      const section = sections.find((s) => s.id === sectionId)!;
      const defaultItem = section.fields.reduce<Record<string, any>>((obj, f) => {
        obj[f.name] = "";
        return obj;
      }, {});
      const newItem = { id: Date.now() + Math.random(), ...defaultItem };
      return { ...prev, [sectionId]: [...(prev[sectionId] || []), newItem] };
    });
  };

  const deleteItem = (sectionId: string, itemId: number) => {
    setEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].filter((it) => it.id !== itemId),
    }));
  };

  const handleChange = (sectionId: string, itemId: number, fieldName: string, value: any) => {
    setEntries((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].map((it) => (it.id === itemId ? { ...it, [fieldName]: value } : it)),
    }));
  };

  const handleSaveAdvance = () => {
    const paymentAmount = Number(advancePaymentData.amount) || 0;

    setFinalValues(prev => ({
      ...prev,
      total: Math.max(prev.total - paymentAmount, 0),
      // you can also update other fields like revenue, transport, hotels here if needed
    }));

    setShowAdvancePayment(false);
  };

  // optional: function to log section data (save)
  const handleSaveSection = (sectionId: string) => {
    console.log("Save section", sectionId, entries[sectionId]);
    // Hook up API call here
    alert(`Saved ${sectionId} (check console)`);
  };

  return (
    <div className="container mx-auto py-5">
      {/* Top Manage Folders card (special) */}
      <div className="bg-white rounded-xl flex items-center justify-between p-6">
        <div>
          <div className="text-black text-xl font-semibold font-['Poppins']">Manage Folders</div>
          <div className="text-subheading-color text-base font-normal font-['Inter'] mt-2">
            Quickly manage folders for better organization.
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 rounded-lg cursor-pointer">
          <img src={img_Lock} alt="Lock Folder" className="w-5 h-5" />
          <span className="text-white text-base font-medium font-poppins leading-tight">Lock Folder</span>
        </div>
      </div>

      {/* Map through sections */}
      {sections.map((section) => (
        <div key={section.id} className="bg-white rounded-xl mt-12 p-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
                <img src={section.icon} className="w-7 h-7" alt={section.title} />
              </div>
              <div>
                <span className="text-black text-xl font-semibold font-['Poppins']">{section.title}</span>
                {section.description ? (
                  <div className="text-subheading-color text-sm font-normal mt-1">{section.description}</div>
                ) : null}
              </div>
            </div>

            {/* Header action button (some sections might not show button, but we display if provided) */}
            {section.buttonLabel ? (
              <div
                className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer"
                onClick={() => addItem(section.id)}
              >
                <img src={AddIcon} alt="Add" className="w-5 h-5" />
                <span className="text-white text-base font-medium font-poppins leading-tight">{section.buttonLabel}</span>
              </div>
            ) : null}
          </div>

          {/* Card area containing repeated items */}
          <div className="bg-white p-6 mt-4">
            {(entries[section.id] || []).map((item) => (
              <div key={item.id} className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-subheading-color text-base font-normal font-['Poppins']">
                    {section.title.includes("Itinerary") ? `Flight #${(entries[section.id] || []).indexOf(item) + 1}` : `Flight #${(entries[section.id] || []).indexOf(item) + 1}`}
                  </h2>
                  <img
                    src={DeleateIcon}
                    onClick={() => deleteItem(section.id, item.id)}
                    className="p-2 bg-red-50 cursor-pointer rounded"
                    alt="Delete"
                  />
                </div>

                {/* Fields grid */}
                {/* Fields grid */}
               <div className={`grid gap-4 grid-cols-${section.gridCols ?? 4}`}>

                  {section.fields.map((f) => {
                    const span = f.colSpan ? `col-span-${f.colSpan}` : "";
                    const value = item[f.name] ?? "";
                    return (
                      <div key={f.name} className={span}>
                        <label className="block mb-1 text-zinc-800 text-sm font-medium font-['Poppins']">
                          {f.label}
                        </label>

                        {f.type === "select" ? (
                          <div className="relative">
                            <select
                              value={value}
                              onChange={(e) => handleChange(section.id, item.id, f.name, e.target.value)}
                              className="w-full px-4 py-2 pr-8 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              style={{
                                appearance: "none",
                                WebkitAppearance: "none",
                                MozAppearance: "none",
                                backgroundImage: "none",
                              }}
                            >
                              <option value="">{`Select ${f.label}`}</option>
                              {f.options?.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                              <img src={dropdownIcon} alt="dropdown icon" className="w-4 h-4 opacity-70" />
                            </div>
                          </div>
                        ) : f.type === "textarea" ? (
                          <textarea
                            value={value}
                            onChange={(e) => handleChange(section.id, item.id, f.name, e.target.value)}
                            placeholder={f.placeholder || ""}
                            className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <input
                            type={f.type}
                            value={value}
                            onChange={(e) => handleChange(section.id, item.id, f.name, e.target.value)}
                            placeholder={f.placeholder || `Enter ${f.label}`}
                            className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-6">
        <div
          className="px-4 py-3 bg-black rounded-lg cursor-pointer w-32 text-center"
          onClick={handleSaveAll}
        >
          <span className="text-white text-base font-medium font-poppins leading-tight">Save All</span>
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

        {
          showAfterSave && (
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
          )
        }

        {showAdvancePayment && (
          <>
            <div className="bg-zinc-100 rounded-tl-xl rounded-tr-xl p-4 mt-12">
              <h2 className="justify-start text-stone-700 text-xl font-semibold font-['Poppins']">Advance Payment Details</h2>
            </div>
            <div className="bg-white p-6">
              <p className="text-subheading-color text-base font-normal font-['Inter']">Payment Details</p>
              <p className="justify-start text-sky-500 text-xl font-semibold font-['Poppins'] mt-3 mb-4">Add Payments</p>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="Amount">Amount</Label>
                  </div>
                  <TextInput id="Amount" type="number" value={advancePaymentData.amount}
                    onChange={(e) => setAdvancePaymentData(prev => ({ ...prev, amount: e.target.value }))}
                    placeholder="23233" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="PaymentDate">Paid Date</Label>
                  </div>
                  <TextInput id="PaymentDate" type="date" value={advancePaymentData.date}
                    onChange={(e) => setAdvancePaymentData(prev => ({ ...prev, date: e.target.value }))} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="PaymentMode">Payment Mode</Label>
                  </div>
                  <TextInput id="PaymentMode" type="text" placeholder="Bank Transfer" value={advancePaymentData.mode}
                    onChange={(e) => setAdvancePaymentData(prev => ({ ...prev, mode: e.target.value }))} required />
                </div>
              </div>

              <div className="flex gap-3 mt-3">
                <Button onClick={handleSaveAdvance} color="cyan">Save</Button>
                <Button onClick={handleCancelAdvance} color="alternative">Cancle</Button>
              </div>
            </div>

          </>
        )}




      </div>
    </div>
  );
};

export default NewFolderFull;
