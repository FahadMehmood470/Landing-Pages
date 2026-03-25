import "./Component.css";
import Admin_Navbar from "../../components/Navbar/Admin_Navbar";
import InfoAdmin from "../../components/Admin_info_block/infoAdmin";
import SalesRevenueChart from "../../components/Admin_info_block/SalesRevenueChart";
const Dashboard = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />
      <InfoAdmin />
      {/* <SalesRev/> */}
      <SalesRevenueChart/>
    </div>
  );
};

export default Dashboard;
