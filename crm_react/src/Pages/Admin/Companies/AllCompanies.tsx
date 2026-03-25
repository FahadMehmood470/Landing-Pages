
import type { NewCompany } from "../../../types/company";
import Arrow_icon from "../../../assets/images/carbon_overflow-menu-vertical (1).svg";
import Phone_icon from "../../../assets/images/Phone_icon.svg";
import Mail_icon from "../../../assets/images/mail_icon.svg";
import Location_icon from "../../../assets/images/Location_icon.svg";
import Eye_Icon from "../../../assets/images/Eye_icon.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
import Swal from "sweetalert2";

interface PropsData {
  companies: NewCompany[];
  onDelete: (id: number) => Promise<void>;
  onEdit: (company: NewCompany) => void;
}
const AllCompanies = React.memo(({ companies, onDelete, onEdit }: PropsData) => {

  console.log("AllCompanies rendered");

  const navigate = useNavigate();
  const Base_Upload_Url = import.meta.env.VITE_BASE_UPLOAD_URL
  const confirmDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      await onDelete(id);
      Swal.fire("Deleted!", "Company removed", "success");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {companies.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border p-4"
          >
            <div className="flex items-center justify-between gap-4">

              <div className="flex gap-5 justify-center items-center">
                <div className="h-full w-16">
                  <img
                    src={`${Base_Upload_Url}/company/${item.image}`}
                    className="rounded-md object-cover"
                    alt={item.title}
                  />
                </div>

                <div>
                  <h1 className="text-black text-xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-xs mt-2">
                    Umrah and Hajj
                  </p>
                </div>
              </div>

              <Dropdown
                inline
                renderTrigger={(props) => (
                  <img
                    {...props}
                    src={Arrow_icon}
                    alt="Arrow"
                    className="w-8 h-8 cursor-pointer"
                  />
                )}
              >
                <DropdownItem onClick={() => onEdit(item)}>
                  Edit
                </DropdownItem>
                <DropdownItem onClick={() => confirmDelete(item.id)}>Delete</DropdownItem>
              </Dropdown>
            </div>

            <div className="mt-8">
              <div className="flex gap-4 mb-4">
                <img src={Phone_icon} className="h-5 w-5" />
                <p>{item.phone}</p>
              </div>

              <div className="flex gap-4 mb-4">
                <img src={Mail_icon} className="h-5 w-5" />
                <p>{item.email}</p>
              </div>

              <div className="flex gap-4 mb-4">
                <img src={Location_icon} className="h-5 w-5" />
                <p>{item.address}</p>
              </div>

              <hr />

              <div
                className="mt-5 flex items-center justify-center gap-3 cursor-pointer"
                onClick={() => navigate(`/companies/agent/${item.id}`)}
              >
                <img src={Eye_Icon} />
                <p className="text-blue-700 text-sm font-medium">
                  View Users
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
});


export default AllCompanies