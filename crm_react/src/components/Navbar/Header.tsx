import "./nabar.css";
import bellIcon from "../../assets/images/bell_icon.svg";
import ProfileImage from "../../assets/images/Profile Image.png";

const Admin_Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="justify-start text-sky-500 text-3xl font-medium font-['Poppins']">
            Hello, Abdul Rehman
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
          <img
            src={bellIcon}
            className="h-auto max-w-full cursor-pointer"
            id="dropdownDefaultButton2"
            data-dropdown-toggle="dropdown2"
            alt="bell Icon"
          />

          {/* Dropdown Menu For bellIcon */}

          <div
            id="dropdown2"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm max-w-content dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  New message from Admin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  System update available
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Meeting at 3 PM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  View all
                </a>
              </li>
            </ul>
          </div>

          {/* Dropdown Menu End Here For bellIcon*/}

          <div
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="flex items-center justify-center space-x-3 cursor-pointer"
          >
            <div>
              <img src={ProfileImage} alt="Profile Image" />
            </div>
            <div>
              <div className="flex items-center justify-center">
                <h2 className="justify-center text-black text-xl font-semibold font-['Poppins'] leading-normal">
                  Abdul Rahman{" "}
                </h2>
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <p className="justify-start text-lime-700 text-[10px] font-medium font-['Poppins'] leading-none">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Admin_Navbar;
