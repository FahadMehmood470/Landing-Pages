import { Outlet } from "react-router-dom"
import Admin_Navbar from "../../components/Navbar/Admin_Navbar"
import SettingsList from "./Settings/SettingsList"

const Settings = () => {
  return (

    <div className="p-8 space-y-12">
      <Admin_Navbar />
      <SettingsList />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Settings