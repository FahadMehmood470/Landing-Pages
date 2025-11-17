import React from 'react'

import { NavLink } from 'react-router-dom';

const ReportsList = () => {
    const items = [
        { label: "Invoicing Report", to: "invoicing-report" },
        { label: "Booking Report", to: "booking-report" },
        { label: "Recieved Report", to: "recieved-eport" },
        { label: "Balance Due Report", to: "balance-due-report" },
        { label: "Travel Pending Report", to: "travel-pending-report" }
    ];

    return (
        <div className="flex flex-wrap gap-10 items-center mr-12">
            {
                items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => `group relative inline-block px-2 py-1 cursor-pointer transition-colors duration-200 ${isActive ? "text-sky-500 text-lg font-semibold" : "text-gray-400 text-lg"}`}
                    >
                        {/* For Showing Label  */}
                        <span className='block'>{item.label}</span>
                        <span
                            className={`absolute left-0 -bottom-0.5 h-[2px] bg-sky-500 transition-all duration-300 origin-left
              group-hover:w-full ${/* start collapsed */ ""} w-0 ${/* if active show full */ ""}`}
                        />
                    </NavLink>
                ))
            }

        </div>
    )
}

export default ReportsList