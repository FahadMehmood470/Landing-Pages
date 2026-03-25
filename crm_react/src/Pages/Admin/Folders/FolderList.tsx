import { NavLink, useLocation } from "react-router-dom";

const items = [
  { label: "New Folders", to: "new-folder" },
  { label: "All Folders", to: "all" },
  { label: "Booking Folders", to: "booking" },
  { label: "Invoiced Folders", to: "invoiced" },
  { label: "Request Folders", to: "requests" },
  { label: "Delete Folders", to: "deleted" },
  { label: "Test Sub Folders", to: "test-sub" },
  { label: "All Folder (VO)", to: "all-vo" },
];

const FolderList = () => {
  const { pathname } = useLocation();
  const isEditPage = pathname.includes("/edit/");
  return (
    <div className="flex flex-wrap items-center gap-10 mr-12">
      {isEditPage ? (
        <NavLink
          to={pathname}
          className="text-sky-500 font-semibold text-lg px-2 py-1"
        >
          Edit
        </NavLink>
      ) : (
        <span className="  group relative inline-block px-2 py-1 text-gray-400 text-lg transition-colors duration-200 cursor-not-allowed">
          Edit
        </span>
      )}
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          className={({ isActive }) => {

            if (isEditPage) isActive = false;

            return `
            group relative inline-block px-2 py-1 cursor-pointer transition-colors duration-200
            ${isActive ? "text-sky-500 text-lg font-semibold" : "text-gray-400 text-lg"}
          `;
          }}
        >
          <span className="block">{it.label}</span>

          {/* animated underline */}
          <span
            className={`
            absolute left-0 -bottom-0.5 h-[2px] bg-sky-500 transition-all duration-300 origin-left
            group-hover:w-full w-0
            ${isEditPage ? "" : ""}
          `}
          />
        </NavLink>
      ))}

    </div>
  );

};

export default FolderList;