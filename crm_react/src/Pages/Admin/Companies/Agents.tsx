import { useParams } from "react-router-dom";
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import Add_icon from "../../../assets/images/Add_icon.svg";
import { useState } from "react";
import AddAgentModel from "./AddAgentModel";

const Agents = () => {
  const { companyId } = useParams(); // <-- this gets the clicked company

  const [openModal, setOpenModal] = useState(false);


  return (


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
          Agents
        </span>
      </div>

      <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer" onClick={() => { setOpenModal(true) }}>
        <img src={Add_icon} alt="Lock Folder" className="w-5 h-5" />
        <span className="text-white text-base font-medium font-poppins leading-tight">Add New Agent</span>
      </div>

      {openModal && (

        <AddAgentModel
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )

      }
    </div >

  );
};

export default Agents;
