// import React from 'react'
import { NavLink } from "react-router-dom";

const items = [
  { label: "Add Manual Lead", to: "manual-leads" },
  { label: "New Leads", to: "new-leads" },
  { label: "Opened Leads", to: "opened-leads" },
  { label: "Released Leads", to: "released-leads" },
  { label: "Closed Leads", to: "closed-leads" },
  { label: "Archive Leads", to: "archive-leads" },
  { label: "View Only Lead", to: "view-only-lead" },
];
const LeadsList = () => {
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

export default LeadsList