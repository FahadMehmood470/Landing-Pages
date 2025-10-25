import { Navigate, Route, Routes } from "react-router-dom";
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
import NewFolder from "../Pages/Admin/Folders/NewFolder.tsx";
import AllFolder from "../Pages/Admin/Folders/AllFolder.tsx";
import BoookingFolder from "../Pages/Admin/Folders/BoookingFolder.tsx";
import InvoicedFolder from "../Pages/Admin/Folders/InvoicedFolder.tsx";
import RequestedFolder from "../Pages/Admin/Folders/RequestedFolder.tsx";
import DeleteFolder from "../Pages/Admin/Folders/DeleteFolder.tsx";
import TestSubFolder from "../Pages/Admin/Folders/TestSubFolder.tsx";
import AllFoldersVO from "../Pages/Admin/Folders/AllFoldersVO.tsx";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="folders" element={<ManageFolders />} /> */}
          <Route path="payments" element={<Payments />} />
          <Route path="list" element={<ListValues />} />
          <Route path="companies" element={<Companies />} />
          <Route path="leads" element={<Leads />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="attendance" element={<Attendance />} />



          <Route path="folders" element={<ManageFolders />}>
            {/* <Route index element={<Navigate to="all" replace />} /> optional default */}
            <Route index element={<Navigate to="new-folder" replace />} />
            <Route path="new-folder" element={<NewFolder />} />
            <Route path="all" element={<AllFolder />} />
            <Route path="booking" element={<BoookingFolder />} />
            <Route path="invoiced" element={<InvoicedFolder />} />
            <Route path="requests" element={<RequestedFolder />} />
            <Route path="deleted" element={<DeleteFolder />} />
            <Route path="test-sub" element={<TestSubFolder />} />
            <Route path="all-vo" element={<AllFoldersVO />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default AdminRoutes;


