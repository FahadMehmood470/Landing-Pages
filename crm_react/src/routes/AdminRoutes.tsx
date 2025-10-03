import { Route, Routes } from "react-router-dom";
import Layout from "../Layout.tsx";
import Dashboard from "../Pages/Admin/Dashboard.tsx";
import ManageFolders from "../Pages/Admin/ManageFolders";
import Payments from "../Pages/Admin/Payments";
import Companies from "../Pages/Admin/Companies";
import ListValues from "../Pages/Admin/ListValues";
import Leads from "../Pages/Admin/Leads";
import Reports from "../Pages/Admin/Reports";
import Settings from "../Pages/Admin/Settings";
import Attendance from "../Pages/Admin/Attendance";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="folders" element={<ManageFolders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="list" element={<ListValues />} />
          <Route path="companies" element={<Companies />} />
          <Route path="leads" element={<Leads />} /> 
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </>
  );
}

export default AdminRoutes;


