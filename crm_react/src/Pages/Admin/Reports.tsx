import Admin_Navbar from "../../components/Navbar/Admin_Navbar"
import ReportsList from "./Reports/ReportsList"
import { Outlet } from "react-router-dom"

const Reports = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />
      <ReportsList/>  
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Reports