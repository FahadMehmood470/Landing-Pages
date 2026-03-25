import { Outlet } from "react-router-dom"
import Admin_Navbar from "../../components/Navbar/Admin_Navbar"
import LeadsList from "./Leads/LeadsList"

const Leads = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />
      {/* <ShowAllCompanies /> */}
      <LeadsList />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Leads