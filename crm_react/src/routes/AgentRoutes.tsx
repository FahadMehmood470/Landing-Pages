import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Agent/Dashboard.tsx";
import ManageFolders from "../Pages/Agent/ManageFolders";
import Leads from "../Pages/Agent/Leads";
import NewFolder from "../Pages/Agent/Folders/NewFolder.tsx";
import AllFolder from "../Pages/Agent/Folders/AllFolder.tsx";
import BoookingFolder from "../Pages/Agent/Folders/BoookingFolder.tsx";
import InvoicedFolder from "../Pages/Agent/Folders/InvoicedFolder.tsx";
import RequestedFolder from "../Pages/Agent/Folders/RequestedFolder.tsx";
import AllFoldersVO from "../Pages/Agent/Folders/AllFoldersVO.tsx";
import AgentLayout from "../Pages/Agent/Layout/AgentLayout.tsx";
import AddManualLeads from "../Pages/Agent/Leads/AddManualLeads.tsx";
import NewLeads from "../Pages/Agent/Leads/NewLeads.tsx";
import OpenLeads from "../Pages/Agent/Leads/OpenLeads.tsx";
import ReleasedLeads from "../Pages/Agent/Leads/ReleasedLeads.tsx";
import ClosedLeads from "../Pages/Agent/Leads/ClosedLeads.tsx";
import ArchivedLeads from "../Pages/Agent/Leads/ArchivedLeads.tsx";
import ViewOnlyLeads from "../Pages/Agent/Leads/ViewOnlyLeads.tsx";

const AgentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AgentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="folders" element={<ManageFolders />} /> */}
          <Route path="leads" element={<Leads />} />
          <Route path="folders" element={<ManageFolders />}>
            {/* <Route index element={<Navigate to="all" replace />} /> optional default */}
            <Route index element={<Navigate to="new-folder" replace />} />
            <Route path="new-folder" element={<NewFolder />} />
            <Route path="all" element={<AllFolder />} />
            <Route path="booking" element={<BoookingFolder />} />
            <Route path="invoiced" element={<InvoicedFolder />} />
            <Route path="requests" element={<RequestedFolder />} />
            <Route path="all-vo" element={<AllFoldersVO />} />
          </Route>
          <Route path="leads" element={<Leads />}>
            <Route index element={<Navigate to="manual-leads" replace />} />
            <Route path="manual-leads" element={<AddManualLeads />} />
            <Route path="new-leads" element={<NewLeads />} />
            <Route path="opened-leads" element={<OpenLeads />} />
            <Route path="released-leads" element={<ReleasedLeads />} />
            <Route path="closed-leads" element={<ClosedLeads />} />
            <Route path="archive-leads" element={<ArchivedLeads />} />
            <Route path="view-only-lead" element={<ViewOnlyLeads />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default AgentRoutes