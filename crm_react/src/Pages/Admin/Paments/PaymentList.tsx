import React from 'react'
import { NavLink } from 'react-router-dom';

const PaymentList = () => {
    const items = [
        { label: "All Payments", to: "all-payments" },
        { label: "Pending Payments", to: "pending-payments" },
        { label: "Approved Payments", to: "approved-payments" },
        { label: "Rejected Payments", to: "rejected-payments" },
        { label: "Payment Invoices", to: "invoice-payments" },
        { label: "Supplier Payments", to: "supplier-payments" }, // list of completed supplier payments
        { label: "Pay to Supplier", to: "pay-supplier" },        // create or record supplier payment
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

export default PaymentList