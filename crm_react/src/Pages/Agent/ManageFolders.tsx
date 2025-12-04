import { Outlet } from "react-router-dom"
// import Admin_Navbar from "../../components/Navbar/Header"
import FolderList from "../../Pages/Agent/Folders/FolderList"
import AgentNavbar from "./AgentNavbar"

const ManageFolders = () => {
  return (

    <div className="p-8 space-y-12">
      <AgentNavbar />
      <FolderList />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default ManageFolders