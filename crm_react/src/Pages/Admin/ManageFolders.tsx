import { Outlet } from "react-router-dom"
import Admin_Navbar from "../../components/Navbar/Header"
import FolderList from "../../Pages/Admin/Folders/FolderList"

const ManageFolders = () => {
  return (

    <div className="p-8 space-y-12">
      <Admin_Navbar />
      <FolderList/>
      <div className="mt-4">
        <Outlet/>
        
      </div>

      
    </div>
  )
}

export default ManageFolders