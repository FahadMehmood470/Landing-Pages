import { Outlet } from "react-router-dom"
import AgentNavbar from "./AgentNavbar"
import LeadsList from "./Leads/LeadsList"

const Leads = () => {
  return (
    <div className="p-8 space-y-12">
      <AgentNavbar />
      <LeadsList/>
      <div className="mt-4">
        <Outlet/>
      </div>
    </div>
  )
}

export default Leads