
import {  Route, Routes } from "react-router-dom";
import AccountLayout from "../Pages/Account Department/Layout/AccountLayout";
import Dashboard from "../Pages/Account Department/Dashboard";
import Payments from "../Pages/Account Department/Payments";
import ListValues from "../Pages/Account Department/ListValues";
import Companies from "../Pages/Account Department/Companies";
import Leads from "../Pages/Account Department/Leads";
import Reports from "../Pages/Account Department/Reports";
import Settings from "../Pages/Account Department/Settings";
import ManageFolders from "../Pages/Account Department/ManageFolders";

const AccountDepRoutes = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<AccountLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* <Route path="folders" element={<ManageFolders />} /> */}
                    <Route path="payments" element={<Payments />} />
                    <Route path="managefolder" element={<ManageFolders />} />
                    <Route path="list" element={<ListValues />} />
                    <Route path="companies" element={<Companies />} />
                    <Route path="leads" element={<Leads />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </>
    )
}

export default AccountDepRoutes