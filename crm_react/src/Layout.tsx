import AdminSidebar from "./components/Sidebar/AdminSidebar";
import { Outlet } from "react-router-dom";
import "./Pages/Admin/Component.css"

const Layout = () => {
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

export default Layout;
