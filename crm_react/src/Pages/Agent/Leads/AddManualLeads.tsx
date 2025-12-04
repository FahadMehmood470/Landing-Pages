import LeadsIcon from "../../../assets/images/Leads_w.svg";
import AddIcon from "../../../assets/images/Add_icon.svg";
import ComunicationIcon from "../../../assets/images/Communication.svg";
// import AttachFile from "../../../assets/images/AttachFolder.svg";
import SendMessage from "../../../assets/images/SendMessage.svg";
import PassportIcon from "../../../assets/images/Passport.svg";
import CameraIcon from "../../../assets/images/CameraIcon.svg";
import HeartIcon from "../../../assets/images/heartIcon.svg";
import UploadIcon from "../../../assets/images/uploadImage.svg";
import DeleteIcon from "../../../assets/images/deleate_icon.svg";
import EyeIcon from "../../../assets/images/Eye_icon.svg";
import DownloadIcon from "../../../assets/images/downloadIcon.svg";

import { Label, TextInput, Select, Textarea, Button, FileInput } from "flowbite-react";
import { useState } from "react";



const AddManualLeads = () => {
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
    const handleFile = (file: File) => {
        const newFile = {
            id: Date.now(),
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
            time: new Date().toLocaleString(),
            type: "Passport", // or Photos / Extras (we can make this dynamic)
            file,
        };

        setUploadedFiles((prev) => [...prev, newFile]);
    };

    return (
        <div className="container mx-auto py-5">

            {/* Top Card */}
            <div className="bg-[#F0F0F0] rounded-xl p-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
                            <img src={LeadsIcon} className="w-7 h-7" alt="Create new folder" />
                        </div>

                        <div>
                            <span className="text-black text-xl font-semibold font-poppins">
                                Add Manual Leads
                            </span>
                            <p className="ptext-subheading-color text-base font-normal font-inter">
                                Fill in the information below to create a new lead
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer">
                        <img src={AddIcon} alt="Add Folder" className="w-5 h-5" />
                        <span className="text-white text-base font-medium font-poppins">
                            Add New Folder
                        </span>
                    </div>
                </div>
            </div>

            {/* 1. Basic Information */}
            <div>
                <h2 className="text-black text-xl font-semibold mt-8 mb-4">
                    1. Basic Information
                </h2>

                <div className="rounded-[10px] outline outline-1 outline-neutral-200 p-3">
                    <form className="flex w-full flex-col gap-4">
                        <div className="grid grid-cols-4 gap-6">

                            <div>
                                <Label htmlFor="name" className="mb-2 block">Name</Label>
                                <TextInput id="name" type="text" placeholder="Enter Customer Name" required />
                            </div>

                            <div>
                                <Label htmlFor="email" className="mb-2 block">Email</Label>
                                <TextInput id="email" type="email" placeholder="name@example.com" required />
                            </div>

                            <div>
                                <Label htmlFor="contact" className="mb-2 block">Contact No</Label>
                                <TextInput id="contact" type="number" placeholder="Enter Contact No" required />
                            </div>

                            <div>
                                <Label htmlFor="whatsapp" className="mb-2 block">WhatsApp Number</Label>
                                <TextInput id="whatsapp" type="number" placeholder="Enter WhatsApp No" required />
                            </div>

                            <div>
                                <Label htmlFor="location" className="mb-2 block">Location</Label>
                                <TextInput id="location" type="text" placeholder="Enter Location" required />
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            {/* 2. Lead Information */}
            <div>
                <h2 className="text-black text-xl font-semibold mt-8 mb-4">
                    2. Lead Information
                </h2>

                <div className="rounded-[10px] outline outline-1 outline-neutral-200 p-3">
                    <form className="flex w-full flex-col gap-4">
                        <div className="grid grid-cols-3 gap-6">

                            <div>
                                <Label htmlFor="leadType" className="mb-2 block">Lead Type</Label>
                                <Select id="leadType" required>
                                    <option>Hot</option>
                                    <option>Warm</option>
                                    <option>Cold</option>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="leadSource" className="mb-2 block">Lead Source</Label>
                                <Select id="leadSource" required>
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                    <option>Website</option>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="status" className="mb-2 block">Status</Label>
                                <Select id="status" required>
                                    <option>Pending</option>
                                    <option>Processing</option>
                                    <option>Closed</option>
                                </Select>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            {/* 3. Travel Date */}
            <div>
                <h2 className="text-black text-xl font-semibold mt-8 mb-4">
                    3. Travel Date
                </h2>

                <div className="rounded-[10px] outline outline-1 outline-neutral-200 p-3">
                    <form className="flex w-full flex-col gap-4">
                        <div className="grid grid-cols-4 gap-6">

                            <div>
                                <Label htmlFor="departureDate" className="mb-2 block">Departure Date</Label>
                                <TextInput id="departureDate" type="date" required />
                            </div>

                            <div>
                                <Label htmlFor="returnDate" className="mb-2 block">Return Date</Label>
                                <TextInput id="returnDate" type="date" required />
                            </div>

                            <div>
                                <Label htmlFor="route" className="mb-2 block">Destination/Route</Label>
                                <TextInput id="route" type="text" placeholder="Enter Route" required />
                            </div>

                            <div>
                                <Label htmlFor="class" className="mb-2 block">Class</Label>
                                <Select id="class" required>
                                    <option>Economy</option>
                                    <option>Business</option>
                                    <option>First Class</option>
                                </Select>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            {/* 4. Who’s Travelling */}
            <div>
                <h2 className="text-black text-xl font-semibold mt-8 mb-4">
                    4. Who’s Travelling?
                </h2>

                <div className="rounded-[10px] outline outline-1 outline-neutral-200 p-3">
                    <form className="flex w-full flex-col gap-4">
                        <div className="grid grid-cols-3 gap-6">

                            <div>
                                <Label htmlFor="adults" className="mb-2 block">Adults</Label>
                                <TextInput id="adults" type="number" placeholder="0" required />
                            </div>

                            <div>
                                <Label htmlFor="children" className="mb-2 block">Children</Label>
                                <TextInput id="children" type="number" placeholder="0" required />
                            </div>

                            <div>
                                <Label htmlFor="infants" className="mb-2 block">Infants</Label>
                                <TextInput id="infants" type="number" placeholder="0" required />
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            {/* 5. Accommodation */}
            <div>
                <h2 className="text-black text-xl font-semibold mt-8 mb-4">
                    5. Accommodation
                </h2>

                <div className="rounded-[10px] outline outline-1 outline-neutral-200 p-3">
                    <form className="flex w-full flex-col gap-4">
                        <div className="grid grid-cols-4 gap-6">

                            <div>
                                <Label htmlFor="nightsMakkah" className="mb-2 block">Nights in Makkah</Label>
                                <TextInput id="nightsMakkah" type="number" placeholder="0" required />
                            </div>

                            <div>
                                <Label htmlFor="nightsMadinah" className="mb-2 block">Nights in Madinah</Label>
                                <TextInput id="nightsMadinah" type="number" placeholder="0" required />
                            </div>

                            <div>
                                <Label htmlFor="rooms" className="mb-2 block">Room Required</Label>
                                <Select id="rooms" required>
                                    <option>Quad</option>
                                    <option>Triple</option>
                                    <option>Double</option>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="hotel" className="mb-2 block">Hotel Preference</Label>
                                <Select id="hotel" required>
                                    <option>5 Star</option>
                                    <option>4 Star</option>
                                    <option>3 Star</option>
                                </Select>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-[#F0F0F0] rounded-xl p-6 mt-8">

                <div className="flex gap-4 items-center">
                    <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
                        <img src={ComunicationIcon} className="w-7 h-7" alt="Create new folder" />
                    </div>

                    <div>
                        <span className="text-black text-xl font-semibold font-poppins">
                            Communication
                        </span>
                        <p className="ptext-subheading-color text-base font-normal font-inter">
                            Remark and interaction
                        </p>
                    </div>

                </div>
                <div className="rounded-[10px] outline-dashed outline-neutral-200 p-3 mt-5">

                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                    <div className="flex items-center justify-end gap-5 pt-5">

                        {/* <div className="flex flex-col">
                            <label
                                htmlFor="file-upload"
                                className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-neutral-300 bg-white hover:bg-gray-100"
                            >
                                <img src={AttachFile} className="h-5 w-5" alt="AttachFile" />
                                <span 
                                >Attach File</span>
                            </label>

                        </div> */}


                        <Button color="cyan"><img src={SendMessage} className="mr-2" alt="SendMessage" /> Send Message</Button>
                    </div>
                    {/* <div className="flex items-end justify-end w-[200px]">

                        <FileInput id="file-upload" className="mt-2 pt-2" />
                    </div> */}
                </div>

            </div>

            <div className="bg-[#F0F0F0] rounded-xl p-6 mt-8">

                <div className="flex gap-4 items-center">
                    <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
                        <img src={ComunicationIcon} className="w-7 h-7" alt="Create new folder" />
                    </div>

                    <div>
                        <span className="text-black text-xl font-semibold font-poppins">
                            Document Upload
                        </span>
                        <p className="ptext-subheading-color text-base font-normal font-inter">
                            Upload essential travel documents for processing
                        </p>
                    </div>

                </div>

                <div className="bg-white p-6 mt-5">

                    <div className="mt-2 flex gap-6 items-center mb-6">

                        <div className="bg-blue-100/20 rounded-xl outline-dashed outline-2 outline-sky-500/50 w-56 flex flex-col items-center justify-center p-6">
                            <img src={PassportIcon} className="h-auto max-w-full" alt="Passport" />
                            <p className="text-center text-sky-500/80 text-xl font-medium mt-3">Passport</p>
                            <p className="text-center text-red-700 text-xl font-normal mt-3">*Required</p>
                        </div>

                        <div className="bg-green-100/20 rounded-xl outline-dashed outline-2 outline-green-500/50 w-56 flex flex-col items-center justify-center p-6">
                            <img src={CameraIcon} className="h-auto max-w-full" alt="Photos" />
                            <p className="text-center text-green-500/80 text-xl font-medium mt-3">Photos</p>
                            <p className="text-center text-red-700 text-xl font-normal mt-3">*Required</p>
                        </div>

                        <div className="bg-amber-100/20 rounded-xl outline-dashed outline-2 outline-amber-500/50 w-56 flex flex-col items-center justify-center p-6">
                            <img src={HeartIcon} className="h-auto max-w-full" alt="Extras" />
                            <p className="text-center text-amber-500/80 text-xl font-medium mt-3">Extras</p>
                            <p className="text-center text-red-700 text-xl font-normal mt-3">*Required</p>
                        </div>

                    </div>

                    <label htmlFor="dropzone-file">
                        <div className="rounded-xl outline outline-2 outline-neutral-200 py-20 px-6 flex flex-col items-center justify-center cursor-pointer">
                            <div className="bg-zinc-100 rounded-xl p-4">
                                <img src={UploadIcon} alt="Upload" />
                            </div>

                            <h3 className="text-center text-neutral-800 text-4xl font-semibold mt-5">Drop file here</h3>

                            <p className="text-zinc-500 text-xl font-medium mt-3">
                                or <span className="text-sky-500 underline ml-1 cursor-pointer">Browse to Upload</span>
                            </p>

                            <p className="text-zinc-500 text-lg font-medium mt-3">
                                Supports: Images, PDF, Word (max 10MB)
                            </p>

                            <FileInput
                                id="dropzone-file"
                                className="hidden"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (!e.target.files) return;
                                    handleFile(e.target.files[0]);
                                }}
                            />

                        </div>
                    </label>


                    <div className="mt-8 space-y-4">
                        {uploadedFiles.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white rounded-xl p-4 border border-neutral-200 shadow-sm"
                            >
                                {/* Left side */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-zinc-100 p-3 rounded-lg">
                                        <img src={UploadIcon} alt="" className="w-6" />
                                    </div>

                                    <div>
                                        <p className="text-lg font-semibold text-neutral-800">
                                            {item.name}
                                        </p>

                                        <p className="text-sm text-neutral-500">
                                            {item.size} • Uploaded {item.time}
                                        </p>
                                    </div>

                                    {/* Category Badge */}
                                    {/* <span
                                        className={`text-sm px-3 py-1 round
                                        ed-full border ml-4 ${item.type === "Passport"
                                            ? "border-amber-500 text-amber-700"
                                            : item.type === "Photos"
                                                ? "border-green-500 text-green-700"
                                                : "border-blue-500 text-blue-700"
                                            }`}
                                    >
                                        {item.type}
                                    </span> */}
                                </div>

                                {/* Right Icons */}
                                <div className="flex items-center gap-4 text-xl">
                                    <button className="text-green-600 hover:text-green-800">
                                        <img src={DownloadIcon} alt="" />
                                    </button>
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <img src={EyeIcon} alt="" />
                                    </button>
                                    <button
                                        className="text-red-600 hover:text-red-800"
                                        onClick={() => setUploadedFiles(prev => prev.filter(f => f.id !== item.id))}
                                    >
                                        <img src={DeleteIcon} alt="" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>





            </div>

        </div>
    );

}

export default AddManualLeads