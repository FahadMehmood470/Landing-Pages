import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import "../Component.css"

const AdminLayout = () => {
  return (
    // <div className="flex items-start">
    //   <AdminSidebar />
    //   <div className="flex-1 dashborad_gradient">
    //     <Outlet />
    //   </div>
    // </div>

    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto dashborad_gradient">
        <Outlet />
      </div>
    </div>


  );
};

export default AdminLayout;
