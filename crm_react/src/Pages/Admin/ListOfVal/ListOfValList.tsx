import { NavLink } from "react-router-dom";

const items = [
  { label: "Suppliers", to: "suppliers" },
  { label: "PaymentsMode", to: "payments-mode" }
];


const ListOfValList = () => {
  return (
    <div className="flex flex-wrap items-center gap-10 mr-12">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          className={({ isActive }) =>
            `group relative inline-block px-2 py-1 cursor-pointer transition-colors duration-200
             ${isActive ? "text-sky-500 text-lg font-semibold" : "text-gray-400 text-lg"}`
          }
        >
          {/* label */}
          <span className="block">{it.label}</span>

          {/* animated underline */}
          <span
            className={`absolute left-0 -bottom-0.5 h-[2px] bg-sky-500 transition-all duration-300 origin-left
              group-hover:w-full ${/* start collapsed */ ""} w-0 ${/* if active show full */ ""}`}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default ListOfValList