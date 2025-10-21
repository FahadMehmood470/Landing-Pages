import bookedFolder from "../../assets/images/booked_folder.svg";
import invoiceFolder from "../../assets/images/invoice_folder.svg";
import requetedFolder from "../../assets/images/request_folder.svg";
import invoicePink from "../../assets/images/invoice_pink.svg";

const infoAdmin = () => {
  return (
    <div>
      <h2 className="self-stretch justify-start text-black text-2xl font-medium font-['Poppins'] leading-tight">
        Folders
      </h2>

      <div className="grid grid-cols-4 mt-5 gap-5">
        <div className="bg-gradient-to-r from-stone-300 to-neutral-400 rounded-xl border border-neutral-200 p-6">
          <div className="flex justify-between items-center">
            <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-4 bg-subheading-color">
                {" "}
                <img src={bookedFolder} alt="booked Folder" />
              </div>
            </div>
            <div>
              <h2 className="self-stretch justify-start text-stone-700 text-xl font-normal font-['Poppins']">
                Booked Folders
              </h2>
              <p className="self-stretch justify-start text-zinc-900 text-2xl font-semibold font-['Poppins'] mt-1">
                3174
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-200 rounded-xl border border-neutral-200 p-6">
          <div className="flex justify-between items-center">
            <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-4 bg-subheading-color">
                {" "}
                <img src={invoiceFolder} alt="invoice Folder" />
              </div>
            </div>
            <div>
              <h2 className="self-stretch justify-start text-stone-700 text-xl font-normal font-['Poppins']">
                Invoice Folders
              </h2>
              <p className="self-stretch justify-start text-zinc-900 text-2xl font-semibold font-['Poppins'] mt-1">
                3174
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-200 to-teal-300 rounded-xl border border-neutral-200 p-6">
          <div className="flex justify-between items-center">
            <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-subheading-color">
                {" "}
                <img src={requetedFolder} alt="requeted Folder" />
              </div>
            </div>
            <div>
              <h2 className="self-stretch justify-start text-stone-700 text-xl font-normal font-['Poppins']">
                Invoiced Request Folders
              </h2>
              <p className="self-stretch justify-start text-zinc-900 text-2xl font-semibold font-['Poppins'] mt-1">
                3174
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-300 to-rose-300 rounded-xl border border-neutral-200 p-6">
          <div className="flex justify-between items-center">
            <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-subheading-color">
                {" "}
                <img src={invoicePink} alt="requeted Folder" />
              </div>
            </div>
            <div>
              <h2 className="self-stretch justify-start text-stone-700 text-xl font-normal font-['Poppins']">
                Invoice Folders
              </h2>
              <p className="self-stretch justify-start text-zinc-900 text-2xl font-semibold font-['Poppins'] mt-1">
                3174
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoAdmin;
