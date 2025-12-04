
import type { NewCompany } from "../../../types/company";
import Hateem_icon from "../../../assets/images/hateem_traels.png";
import Arrow_icon from "../../../assets/images/Right_arrow_icon.svg";
import Phone_icon from "../../../assets/images/Phone_icon.svg";
import Mail_icon from "../../../assets/images/mail_icon.svg";
import Location_icon from "../../../assets/images/Location_icon.svg";
import Agent_icon from "../../../assets/images/agent_icon.svg";
import Eye_Icon from "../../../assets/images/Eye_icon.svg";
import { useNavigate } from "react-router-dom";



interface PropsData {
  companies: NewCompany[];
}
const AllCompanies = ({ companies }: PropsData) => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mt-12">

        <div className=" bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200 p-4">
          <div className="flex items-center justify-between gap-4">
            <img
              src={Hateem_icon}
              className="w-24 h-24 rounded-md object-cover"
              alt="Hateem icon"
            />

            <div>
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-6">
                Hateem Travels
              </h1>
              <p className="text-gray-500 text-xs font-normal font-['Poppins'] mt-2">
                Umrah and Hajj
              </p>
            </div>

            <img
              src={Arrow_icon}
              className="w-8 h-8 rounded-md object-cover"
              alt="Arrow icon"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Phone_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">020 3062 8924</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Mail_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">info@hateemtravels.co.uk</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Location_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">
                48 Hassall Avenue Manchester, Aberdeen City Gwent, M20 1DX, United Kingdom.
              </p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Agent_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">8 Agents</p>
            </div>

            <hr />

            <div className="mt-5 mb-5 flex items-center justify-center gap-3 cursor-pointer">
              <img src={Eye_Icon} alt="View agents icon" />
              <p className="text-blue-700 text-sm font-medium font-['Poppins'] leading-5">
                View Agents
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200 p-4">
          <div className="flex items-center justify-between gap-4">
            <img
              src={Hateem_icon}
              className="w-24 h-24 rounded-md object-cover"
              alt="Hateem icon"
            />

            <div>
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-6">
                Hateem Travels
              </h1>
              <p className="text-gray-500 text-xs font-normal font-['Poppins'] mt-2">
                Umrah and Hajj
              </p>
            </div>

            <img
              src={Arrow_icon}
              className="w-8 h-8 rounded-md object-cover"
              alt="Arrow icon"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Phone_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">020 3062 8924</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Mail_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">info@hateemtravels.co.uk</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Location_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">
                48 Hassall Avenue Manchester, Aberdeen City Gwent, M20 1DX, United Kingdom.
              </p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Agent_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">8 Agents</p>
            </div>

            <hr />

            <div className="mt-5 mb-5 flex items-center justify-center gap-3 cursor-pointer">
              <img src={Eye_Icon} alt="View agents icon" />
              <p className="text-blue-700 text-sm font-medium font-['Poppins'] leading-5">
                View Agents
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200 p-4">
          <div className="flex items-center justify-between gap-4">
            <img
              src={Hateem_icon}
              className="w-24 h-24 rounded-md object-cover"
              alt="Hateem icon"
            />

            <div>
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-6">
                Hateem Travels
              </h1>
              <p className="text-gray-500 text-xs font-normal font-['Poppins'] mt-2">
                Umrah and Hajj
              </p>
            </div>

            <img
              src={Arrow_icon}
              className="w-8 h-8 rounded-md object-cover"
              alt="Arrow icon"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Phone_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">020 3062 8924</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Mail_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">info@hateemtravels.co.uk</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Location_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">
                48 Hassall Avenue Manchester, Aberdeen City Gwent, M20 1DX, United Kingdom.
              </p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Agent_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">8 Agents</p>
            </div>

            <hr />

            <div className="mt-5 mb-5 flex items-center justify-center gap-3 cursor-pointer">
              <img src={Eye_Icon} alt="View agents icon" />
              <p className="text-blue-700 text-sm font-medium font-['Poppins'] leading-5">
                View Agents
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200 p-4">
          <div className="flex items-center justify-between gap-4">
            <img
              src={Hateem_icon}
              className="w-24 h-24 rounded-md object-cover"
              alt="Hateem icon"
            />

            <div>
              <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-6">
                Hateem Travels
              </h1>
              <p className="text-gray-500 text-xs font-normal font-['Poppins'] mt-2">
                Umrah and Hajj
              </p>
            </div>

            <img
              src={Arrow_icon}
              className="w-8 h-8 rounded-md object-cover"
              alt="Arrow icon"
            />
          </div>

          <div className="mt-8">
            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Phone_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">020 3062 8924</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Mail_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">info@hateemtravels.co.uk</p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Location_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">
                48 Hassall Avenue Manchester, Aberdeen City Gwent, M20 1DX, United Kingdom.
              </p>
            </div>

            <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
              <img src={Agent_icon} className="h-5 w-5" alt="" />
              <p className="text-base font-normal font-['Inter'] leading-4">8 Agents</p>
            </div>

            <hr />

            <div className="mt-5 mb-5 flex items-center justify-center gap-3 cursor-pointer">
              <img src={Eye_Icon} alt="View agents icon" />
              <p className="text-blue-700 text-sm font-medium font-['Poppins'] leading-5">
                View Agents
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-12">
        {companies.map((item) => (
          <div className=" bg-white rounded-xl shadow-[0px_10px_32px_0px_rgba(0,0,0,0.08)] border border-neutral-200 p-4">
            <div className="flex items-center justify-between gap-4">

              {item.logo && (
                <img
                  src={URL.createObjectURL(item.logo)}
                  className="w-24 h-24 rounded-md object-cover"
                  alt={item.company}
                />
              )}

              <div>
                <h1 className="text-black text-xl font-semibold font-['Poppins'] leading-6">
                  {item.company}
                </h1>
                <p className="text-gray-500 text-xs font-normal font-['Poppins'] mt-2">
                  Umrah and Hajj
                </p>
              </div>

              <img
                src={Arrow_icon}
                className="w-8 h-8 rounded-md object-cover"
                alt="Arrow icon"
              />
            </div>
            <div className="mt-8">
              <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
                <img src={Phone_icon} className="h-5 w-5" alt="" />
                <p className="text-base font-normal font-['Inter'] leading-4">{item.number}</p>
              </div>

              <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
                <img src={Mail_icon} className="h-5 w-5" alt="" />
                <p className="text-base font-normal font-['Inter'] leading-4">{item.email}</p>
              </div>

              <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
                <img src={Location_icon} className="h-5 w-5" alt="" />
                <p className="text-base font-normal font-['Inter'] leading-4">
                  {item.address}
                </p>
              </div>

              <div className="flex items-start gap-4 cursor-pointer text-neutral-700 hover:text-blue-600 mb-4">
                <img src={Agent_icon} className="h-5 w-5" alt="" />
                <p className="text-base font-normal font-['Inter'] leading-4">8 Agents</p>
              </div>

              <hr />

              <div className="mt-5 mb-5 flex items-center justify-center gap-3 cursor-pointer"  onClick={() => navigate(`/companies/agent/${item.company}`)}
>
                <img src={Eye_Icon} alt="View agents icon" />
                <p className="text-blue-700 text-sm font-medium font-['Poppins'] leading-5">
                  View Agents
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllCompanies