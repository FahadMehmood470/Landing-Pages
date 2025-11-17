import { Outlet } from "react-router-dom"
import Admin_Navbar from "../../components/Navbar/Header"
import ListOfValList from "./ListOfVal/ListOfValList"
const ListValues = () => {
  return (
    <div className="p-8 space-y-12">
      <Admin_Navbar />

     <ListOfValList/>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )

}

export default ListValues