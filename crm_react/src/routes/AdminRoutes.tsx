import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../Pages/Admin/Layout/AdminLayout.tsx";
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
import AllPayment from "../Pages/Admin/Payments/AllPayment.tsx";
import PendingPayments from "../Pages/Admin/Payments/PendingPayments.tsx";
import ApprovedPayments from "../Pages/Admin/Payments/ApprovedPayments.tsx";
import RejectedPayments from "../Pages/Admin/Payments/RejectedPayments.tsx";
import PaymentInvoice from "../Pages/Admin/Payments/PaymentInvoice.tsx";
import SupplierPaymets from "../Pages/Admin/Payments/SupplierPaymets.tsx";
import PayToSupplier from "../Pages/Admin/Payments/PayToSupplier.tsx";
import Suppliers from "../Pages/Admin/ListOfVal/Suppliers.tsx";
import PaymentMode from "../Pages/Admin/ListOfVal/PaymentMode.tsx";
import InvoicingReport from "../Pages/Admin/Reports/InvoicingReport.tsx";
import BookingReport from "../Pages/Admin/Reports/BookingReport.tsx";
import RecievedReport from "../Pages/Admin/Reports/RecievedReport.tsx";
import BalanceDueReport from "../Pages/Admin/Reports/BalanceDueReport.tsx";
import TravelPendingReport from "../Pages/Admin/Reports/TravelPendingReport.tsx";
// import ShowAllCompanies from "../Pages/Admin/Companies/ShowAllCompanies.tsx";
import EditFolder from "../Pages/Admin/Folders/EditFolder.tsx";
import NewLeads from "../Pages/Admin/Leads/NewLeads.tsx";
import OpenLeads from "../Pages/Admin/Leads/OpenLeads.tsx";
import CloseLeads from "../Pages/Admin/Leads/CloseLeads.tsx";
import RealeasedLeads from "../Pages/Admin/Leads/RealeasedLeads.tsx";
import CompanyAgents from "../Pages/Admin/Companies/CompanyAgents.tsx";
import ManageUser from "../Pages/Admin/Settings/ManageUser.tsx";
import ManageCompany from "../Pages/Admin/Settings/ManageCompany.tsx";
import ManageCompanyTC from "../Pages/Admin/Settings/ManageCompanyTC.tsx";
import CompaniesPage from "../Pages/Admin/Companies/CompaniesPage.tsx";
import Users from "../Pages/Admin/Users.tsx";

function AdminRoutes() {
  return (
    <>
      <Routes>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="folders" element={<ManageFolders />} /> */}
          <Route path="payments" element={<Payments />} />
          <Route path="list" element={<ListValues />} />
          <Route path="companies" element={<Companies />} />
          <Route path="users" element={<Users />} />
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
            <Route path="edit/:id" element={<EditFolder />} />
          </Route>

          <Route path="payments" element={<Payments />}>
            <Route index element={<Navigate to="all-payments" replace />} />
            <Route path="all-payments" element={<AllPayment />} />
            <Route path="pending-payments" element={<PendingPayments />} />
            <Route path="approved-payments" element={<ApprovedPayments />} />
            <Route path="rejected-payments" element={<RejectedPayments />} />
            <Route path="invoice-payments" element={<PaymentInvoice />} />
            <Route path="supplier-payments" element={<SupplierPaymets />} />
            <Route path="pay-supplier" element={<PayToSupplier />} />
          </Route>

          <Route path="list" element={<ListValues />}>
            <Route index element={<Navigate to="suppliers" replace />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="payments-mode" element={<PaymentMode />} />
          </Route>

          <Route path="reports" element={<Reports />}>
            <Route index element={<Navigate to="invoicing-report" replace />} />
            <Route path="invoicing-report" element={<InvoicingReport />} />
            <Route path="booking-report" element={<BookingReport />} />
            <Route path="recieved-eport" element={<RecievedReport />} />
            <Route path="balance-due-report" element={<BalanceDueReport />} />
            <Route path="travel-pending-report" element={<TravelPendingReport />} />
          </Route>

          <Route path="leads" element={<Leads />}>
            <Route index element={<Navigate to="new-leads" replace />} />
            <Route path="new-leads" element={<NewLeads />} />
            <Route path="opened-leads" element={<OpenLeads />} />
            <Route path="released-leads" element={<RealeasedLeads />} />
            <Route path="closed-leads" element={<CloseLeads />} />
          </Route>


          {/* <Route path="companies" element={<Companies />}>
            Default route inside Companies
            <Route index element={<ShowAllCompanies />} />

            Agent route
            <Route path="agent/:companyId" element={<CompanyAgents />} />
          </Route> */}

          <Route path="companies" element={<Companies />}>

            {/* <Route  element={<ShowAllCompanies />} /> */}
            <Route index element={<CompaniesPage />} />
            <Route path="agent/:companyId" element={<CompanyAgents />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route index element={<Navigate to="manage-users" replace />} />
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-company" element={<ManageCompany />} />
            <Route path="manage-companyTC" element={<ManageCompanyTC />} />


          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default AdminRoutes;


