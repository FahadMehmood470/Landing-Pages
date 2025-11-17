

import { Outlet } from "react-router-dom"
import Admin_Navbar from "../../components/Navbar/Header"
import ShowAllCompanies from "./Companies/ShowAllCompanies"
// import FolderList from "../../Pages/Admin/Folders/FolderList"

const Companies = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />
     <ShowAllCompanies/>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Companies

