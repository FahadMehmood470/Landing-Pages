import React from 'react'
import type { NewCompany } from "../../../types/company";



interface PropsData {
  companies: NewCompany[];
}
const AllCompanies = ({ companies }: PropsData) => {
  return (
    <div>
      {companies.map((item) => (
        <div className="w-96 h-80 bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200">
            
        </div>
      ))}
    </div>
  );
};


export default AllCompanies