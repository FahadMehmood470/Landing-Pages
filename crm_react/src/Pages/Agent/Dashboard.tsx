import "./Component.css";
// import Admin_Navbar from "../../components/Navbar/Header";
import InfoAdmin from "../../components/Admin_info_block/infoAdmin";
import RecentBooking from "./RecentBooking";
// import AgentNavbar from "./AgentNavbar";
import Admin_Navbar from "../../components/Navbar/Admin_Navbar";
const Dashboard = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />
      <InfoAdmin />
      {/* <SalesRev/> */}
      {/* <SalesRevenueChart/> */}
      <RecentBooking/>
    </div>
  );
};

export default Dashboard;
