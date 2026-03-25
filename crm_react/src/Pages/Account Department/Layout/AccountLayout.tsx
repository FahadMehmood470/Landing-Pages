// import React from 'react'
import { Outlet } from 'react-router-dom';
import AccountDepSidebar from '../../../components/Sidebar/AccountDepSidebar';

const AccountLayout = () => {
  return (
    // <div className="flex items-start">
    //   <AdminSidebar />
    //   <div className="flex-1 dashborad_gradient">
    //     <Outlet />
    //   </div>
    // </div>

    <div className="flex min-h-screen">
      <AccountDepSidebar />
      <div className="flex-1 overflow-y-auto bg-[#F7F7F7]">
        <Outlet />
      </div>
    </div>


  );
}

export default AccountLayout