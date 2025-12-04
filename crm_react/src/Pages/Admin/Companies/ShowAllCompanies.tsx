import { useState } from 'react'
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import Add_icon from "../../../assets/images/Add_icon.svg";
import AddCompanyModal from './AddCompanyModal';
import AllCompanies from './AllCompanies';
import type { NewCompany } from "../../../types/company";


const ShowAllCompanies = () => {
    const [openModal, setOpenModal] = useState(false);
    const [companies, setCompanies] = useState<NewCompany[]>([]);


    function handleSaveCompany(data: NewCompany): void {
        console.log("Saved Company:", data);
        setCompanies(prev => [...prev, data])
    }

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


                {openModal && (
                    <AddCompanyModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        onSave={handleSaveCompany}
                    />
                )}

            </div >

            <AllCompanies companies={companies} />
        </>
    )

}

export default ShowAllCompanies