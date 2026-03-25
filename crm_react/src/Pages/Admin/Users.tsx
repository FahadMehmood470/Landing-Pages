import Admin_Navbar from "../../components/Navbar/Admin_Navbar"
import AllUsers from "./Users/AllUsers"

const Users = () => {
  return (
      <div className="p-8 space-y-12">
      <Admin_Navbar />
      <div className="mt-4">
        <AllUsers/>
      </div>    
    </div>
  )
}

export default Users