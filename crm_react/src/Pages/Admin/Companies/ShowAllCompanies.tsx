import { useState, useEffect } from 'react'
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import Add_icon from "../../../assets/images/Add_icon.svg";
import AddCompanyModal from '../../../components/Modal/AddCompanyModal';
import AllCompanies from './AllCompanies';
import type { CreateCompanyPayload } from "../../../types/CreateCompanyPayload";
import type { NewCompany } from "../../../types/company";

import Swal from 'sweetalert2';
import Companyapi from '../../../api/Companyapi';
// import api from '../../../api/api';


const ShowAllCompanies = () => {

  useEffect(() => {
    //  console.log("LOCAL TOKEN:", lo
    // calStorage.getItem("token"));
    fetchCompanies();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [companies, setCompanies] = useState<NewCompany[]>([]);
  const [editingCompany, setEditingCompany] = useState<NewCompany | null>(null);
  const isModalOpen = openModal || editingCompany !== null;


  const handleSubmitCompany = async (
    data: CreateCompanyPayload,
    id?: number
  ) => {
    try {
      const formData = new FormData();

      formData.append("title", data.company);
      // formData.append("company_type", data.companyType);
      formData.append("email", data.email);
      formData.append("phone", data.number);
      formData.append("web_address", data.website);
      formData.append("address", data.address);
      formData.append("subscribe_link", data.subscribe_link || "");

      formData.append("status", data.status === "active" ? "1" : "0");

      if (data.logo instanceof File) {
        formData.append("image", data.logo);
      }

      // console.log();
      
      if (id) {
        await Companyapi.post(`/companies/${id}?_method=PUT`, formData);
        Swal.fire("Updated", "Company updated successfully", "success");
      } else {
        await Companyapi.post("/companies", formData);
        Swal.fire("Added", "Company added successfully", "success");
      }

      fetchCompanies();
      setEditingCompany(null);
    } catch {
      Swal.fire("Error", "Operation failed", "error");
    }
  };




  const fetchCompanies = async () => {
    try {
      const response = await Companyapi.get("/companies")
      setCompanies(response.data.data);
    } catch (error: any) {
      if (error.response?.status === 401) {
        Swal.fire("Session Expired", "Please login again", "warning");
      }
      console.error(error);
    }
  }

  const deleteCompany = async (id: number) => {
    try {
      await Companyapi.delete(`/companies/${id}`);
      setCompanies(prev => prev.filter(c => c.id !== id));
    } catch (error) {
      Swal.fire("Error", "Failed to delete company", "error");
    }
  };

  const closeModal = () => {
    setOpenModal(false);
    setEditingCompany(null);
  };



  return (
    <>
      <div className="bg-[#F0F0F0] rounded-tl-xl rounded-tr-xl flex items-center justify-between p-6">

        <div className="flex gap-4 items-center">
          <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
            <img
              src={BreackIcon}
              className="w-7 h-7"
              alt="Create new folder"
            />
          </div>
          <span className="justify-start text-black text-xl font-semibold font-['Poppins']">
            Companies
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer" onClick={() => { setOpenModal(true) }}>
          <img src={Add_icon} alt="Lock Folder" className="w-5 h-5" />
          <span className="text-white text-base font-medium font-poppins leading-tight">Add New Company</span>
        </div>

        <AddCompanyModal
          openModal={isModalOpen}
          setOpenModal={closeModal}
          editingCompany={editingCompany}
          onSubmit={handleSubmitCompany}
        />



      </div >

      <AllCompanies
        companies={companies}
        onDelete={deleteCompany}
        onEdit={(company) => {
          setEditingCompany(company);
          setOpenModal(true);
        }}
      />
    </>
  )

}

export default ShowAllCompanies