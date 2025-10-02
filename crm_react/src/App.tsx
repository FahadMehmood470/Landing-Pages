import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import ManageFolders from "./Pages/ManageFolders";
import Payments from "./Pages/Payments";
import Companies from "./Pages/Companies";
import ListValues from "./Pages/ListValues";
import Leads from "./Pages/Leads";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import Attendance from "./Pages/Attendance";

function App() {
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

export default App;
