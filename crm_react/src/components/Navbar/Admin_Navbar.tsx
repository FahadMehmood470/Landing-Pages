import "./nabar.css";
import bellIcon from "../../assets/images/bell_icon.svg";
import ProfileImage from "../../assets/images/Profile Image.png";
import DropdownIcon from "../../assets/images/d_icon.svg";
import { useNavigate } from "react-router-dom";

import { Dropdown, DropdownItem } from "flowbite-react";
// import api from "../../api/api";
// const navigate = useNavigate();
const Admin_Navbar = () => {

  const storedUser=localStorage.getItem("user")
  const user =storedUser?JSON.parse(storedUser):null
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("user");
  navigate("/login");
};

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="justify-start text-sky-500 text-3xl font-medium font-['Poppins']">
            Hello,{user?.name || "User"}
  
          </h1>
          <p className="justify-start text-neutral-400 text-base font-normal font-['Poppins'] mt-2">
            Your bookings and revenue insights in one view
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <form className="w-80 mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-zinc-500 text-base font-normal font-['Poppins'] border border-gray-300 rounded-lg bg-zinc-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search anything"
                required
              />
            </div>
          </form>
          <Dropdown
            label={
              <img
                src={bellIcon}
                alt="Bell Icon"
                className="h-auto max-w-full cursor-pointer"
              />
            }
            arrowIcon={false}
            dismissOnClick={false}
            placement="bottom-end"
          >
            <DropdownItem>Notifications</DropdownItem>
            <DropdownItem>New message from Admin</DropdownItem>
            <DropdownItem>System update available</DropdownItem>
            <DropdownItem>Meeting at 3 PM</DropdownItem>
            <DropdownItem>View all</DropdownItem>
          </Dropdown>

          <div className="flex items-center justify-center space-x-3 cursor-pointer">
            <img src={ProfileImage} alt="Profile" />

            <Dropdown
              label={
                <div>
                  <div className="flex items-center justify-center ">
                    <h2 className="justify-center text-black text-xl w-48 font-semibold font-['Poppins'] leading-normal">
                     {user?.name || "User"}{" "}
                    </h2>
                    {/* <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
                    <img src={DropdownIcon} alt="Dropdown Icon" />
                  </div>

                  <p className="justify-start text-lime-700 text-[10px] font-medium font-['Poppins'] leading-none">
                    Admin
                  </p>
                </div>
              }
              dismissOnClick={false}
              arrowIcon={false}
              className="z-10 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
            >
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Earnings</DropdownItem>
              <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Admin_Navbar;
