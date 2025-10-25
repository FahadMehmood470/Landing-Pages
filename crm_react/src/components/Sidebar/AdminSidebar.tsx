import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      white: "/Dashboard_w.svg",
      black: "/Dashboard_b.svg",
    },
    {
      id: 2,
      name: "Manage Folders",
      path: "/folders",
      white: "/manage_folder_w.svg",
      black: "/manage_folder_b.svg",
    },
    {
      id: 3,
      name: "Payments",
      path: "/payments",
      white: "/Payments_w.svg",
      black: "/Payments_b.svg",
    },
    {
      id: 3,
      name: "List Of Values",
      path: "/list",
      white: "/list_w.svg",
      black: "/list_b.svg",
    },
    {
      id: 4,
      name: "Companies",
      path: "/companies",
      white: "/Companies_w.svg",
      black: "/Companies_b.svg",
    },
    {
      id: 5,
      name: "Leads",
      path: "/leads",
      white: "/Leads_w.svg",
      black: "/Leads_b.svg",
    },
    {
      id: 6,
      name: "Reports",
      path: "/reports",
      white: "/Reports_w.svg",
      black: "/Reports_b.svg",
    },
    {
      id: 7,
      name: "Settings",
      path: "/settings",
      white: "/Settings_w.svg",
      black: "/Settings_b.svg",
    },
        {
      id: 8,
      name: "Attendance",
      path: "/attendance",
      white: "/Attendance_w.svg",
      black: "/Attendance_b.svg",
    },
  ];

  return (
    <div className="w-80 bg-white shadow-[1px_0px_30px_2px_rgba(239,239,244,1.00)] p-12 h-[100%]">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-sky-500 rounded-xl"></div>
        <h1 className="text-black text-2xl font-semibold font-poppins">LOGO</h1>
      </div>

      <div className="mt-12 space-y-4">
        {menuItems.map((items) => (
          <NavLink
            key={items.name}
            to={items.path}
            className={({
              isActive,
            }) => `flex items-center gap-3 rounded-lg p-3 cursor-pointer
              ${isActive ? "bg-black text-white" : "bg-zinc-100 text-zinc-800"}
               hover:bg-gray-700 hover:text-white`}
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? items.white : items.black}
                  alt={items.name}
                />
                <span>{items.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
