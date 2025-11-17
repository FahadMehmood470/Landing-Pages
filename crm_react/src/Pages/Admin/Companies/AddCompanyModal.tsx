import { Button, Modal, ModalBody, ModalFooter, Select, Label, ModalHeader, TextInput } from "flowbite-react";
import Inside_image from "../../../assets/images/inside_image.svg";
import upload_Logo from "../../../assets/images/upload_logo.svg";
import TrashIcon from "../../../assets/images/deleate_icon.svg"; // or any trash icon
import Swal from "sweetalert2";
    
import React, { useState } from "react";


type NewCompany = {
  company: string;
  companyType: string;
  email: string;
  number: string;
  website: string;
  address: string;
  status: string;
  logo: File | null;
};


interface ModalProps {
    openModal: boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>; // proper type for setState
    onSave: (data: NewCompany) => void; // <- function prop
}


const AddCompanyModal = ({ openModal, setOpenModal,onSave }: ModalProps) => {
    // States
    const [company, setCompany] = useState("");
    const [companyType, setCompanyType] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("");
    const [logo, setLogo] = useState<File | null>(null);

    const onCloseModal = () => {
        setOpenModal(false);
        setCompany("");
        setCompanyType("");
        setEmail("");
        setNumber("");
        setWebsite("");
        setAddress("");
        setStatus("");
        setLogo(null);
    };



    const onSaveModal = () => {
        if (company === "" || companyType === "" || email === "" || number === "" || website === "" || address === "" || status === "" || logo === null) {
            Swal.fire({
                title: "Complete All Fields",
                icon: "error"
            });
                return; // stop here if validation fails
        } else {
            // 👉 Create an object containing all form data
            const newCompany = {
                company,
                companyType,
                email,
                number,
                website,
                address,
                status,
                logo
            };
  onSave(newCompany);
           onCloseModal()
            
        }

    }

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };
    

    return (
        <Modal show={openModal} onClose={onCloseModal}>
            <ModalHeader>
                <span className="text-lg font-semibold">Add New Company</span>

                <div className="flex items-center gap-4 mt-5">
                    {logo ? (
                        <div className="relative w-24 h-24">
                            {/* Uploaded logo */}
                            <img
                                src={URL.createObjectURL(logo)}
                                alt="Logo Preview"
                                className="w-24 h-24 rounded-md object-cover"
                            />

                            {/* Trash icon appears on hover */}
                            <button
                                onClick={() => setLogo(null)}
                                className="absolute top-1 right-1 bg-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                            >
                                <img src={TrashIcon} alt="Delete" className="w-12 h-12" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-4 items-end">
                            {/* Placeholder */}
                            <div className="w-24 h-24 p-4 rounded-md border-2 border-dashed border-zinc-400 flex items-center justify-center">
                                <img src={Inside_image} alt="Placeholder" className="w-12 h-12" />
                            </div>

                            {/* Upload Button */}
                            <div>
                                <label
                                    htmlFor="logoUpload"
                                    className="w-48 h-10 px-4 py-2 bg-white rounded-md border border-zinc-400 flex flex-row items-center justify-center gap-2 text-zinc-500 text-sm font-normal font-['Poppins'] cursor-pointer hover:bg-gray-50"
                                >
                                    <img src={upload_Logo} alt="Upload Icon" className="w-4 h-4" />
                                    Upload Logo
                                </label>

                                <input
                                    id="logoUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </ModalHeader>

            <ModalBody>
                <div className="grid grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                        <Label htmlFor="company">Company / Branch Name</Label>
                        <TextInput
                            id="company"
                            placeholder="Hateem Travels"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        />
                    </div>

                    {/* Company Type */}
                    <div>
                        <Label htmlFor="companyType">Company Type</Label>
                        <Select
                            id="companyType"
                            value={companyType}
                            onChange={(e) => setCompanyType(e.target.value)}
                            required
                        >
                            <option value="">Select a company type</option>
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                            <option value="ngo">NGO</option>
                            <option value="government">Government</option>
                        </Select>
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <TextInput
                            id="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div>
                        <Label htmlFor="number">Number</Label>
                        <TextInput
                            id="number"
                            placeholder="Contact Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <Label htmlFor="website">Website</Label>
                        <TextInput
                            id="website"
                            placeholder="Enter link"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <TextInput
                            id="address"
                            placeholder="Enter location"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                {/* Status */}
                <div className="mt-4">
                    <Label htmlFor="status">Status</Label>
                    <Select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                    </Select>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="dark" onClick={onSaveModal}>Submit</Button>
                <Button color="alternative" onClick={onCloseModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AddCompanyModal