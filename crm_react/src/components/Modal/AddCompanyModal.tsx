import { Button, Modal, ModalBody, ModalFooter, Select, Label, ModalHeader, TextInput } from "flowbite-react";
import Inside_image from "../../assets/images/inside_image.svg";
import upload_Logo from "../../assets/images/upload_logo.svg";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import type { CreateCompanyPayload } from "../../types/CreateCompanyPayload";

interface ModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (data: CreateCompanyPayload, id?: number) => Promise<void>;
    editingCompany?: any | null;
}


const AddCompanyModal = ({ openModal, setOpenModal, onSubmit, editingCompany, }: ModalProps) => {
    // States
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("");
    const [subscribe_link, setsubscribe_link] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [logo, setLogo] = useState<File | null>(null);
    const Base_Upload_Url = import.meta.env.VITE_BASE_UPLOAD_URL
    const onCloseModal = () => {
        setOpenModal(false);
        setCompany("");
        // setCompanyType("");
        setEmail("");
        setNumber("");
        setWebsite("");
        setAddress("");
        setStatus("");
        setsubscribe_link("");
        // setLogo(null);
    };


    useEffect(() => {
        if (editingCompany) {
            // EDIT MODE
            setCompany(editingCompany.title || "");

            setEmail(editingCompany.email || "");
            setNumber(editingCompany.phone || "");
            setWebsite(editingCompany.web_address || "");
            setAddress(editingCompany.address || "");
            setsubscribe_link(editingCompany.subscribe_link || "");
            setStatus(editingCompany.status ? "active" : "inactive");
            setLogo(null);
        } else {
            // ADD MODE (RESET FORM)
            setCompany("");
            // setCompanyType("");
            setEmail("");
            setNumber("");
            setWebsite("");
            setAddress("");
            setStatus("");
            setsubscribe_link("")
            setLogo(null);
        }
    }, [editingCompany]);

    const onSaveModal = async () => {
        if (!validate()) {
            return; // stop submit if validation fails
        }

        try {
            await onSubmit({
                company,
                email,
                number,
                website,
                address,
                subscribe_link,
                status,
                logo
            }, editingCompany?.id);

            onCloseModal();
        } catch {
            Swal.fire("Error", "Save failed", "error");
        }
    };


    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!company.trim()) newErrors.company = "Company is required";
        if (!status) newErrors.status = "Status is required";
        if (!number.trim() || number.length <= 7) newErrors.number = "number must be at least 6 characters";
        if (!address.trim()) newErrors.address = "Address is required";
        if (!website.trim()) newErrors.website = "website is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };



    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };

    const clearError = (field: string) => {
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const updated = { ...prev };
            delete updated[field];
            return updated;
        });
    };


    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <ModalHeader>
                {/* <span className="text-lg font-semibold">Add New Company</span> */}
                <span className="text-lg font-semibold">
                    {editingCompany ? "Edit Company" : "Add New Company"}
                </span>



                <div className="flex items-center gap-4 mt-5">

                    {/* IMAGE PREVIEW */}
                    {logo ? (
                        <img
                            src={URL.createObjectURL(logo)}
                            className="w-24 h-24 rounded-md"
                        />
                    ) : editingCompany?.image ? (
                        <img
                            src={`${Base_Upload_Url}/company/${editingCompany.image}`}
                            className="w-24 h-24 rounded-md"
                        />
                    ) : (
                        <div className="w-24 h-24 p-4 rounded-md border-2 border-dashed border-zinc-400 flex items-center justify-center">
                            <img src={Inside_image} alt="Placeholder" className="w-12 h-12" />
                        </div>
                    )}

                    {/* UPLOAD / CHANGE BUTTON (ALWAYS VISIBLE) */}
                    <div>
                        <label
                            htmlFor="logoUpload"
                            className="w-48 h-10 px-4 py-2 bg-white rounded-md border border-zinc-400 flex flex-row items-center justify-center gap-2 text-zinc-500 text-sm font-normal cursor-pointer hover:bg-gray-50"
                        >
                            <img src={upload_Logo} alt="Upload Icon" className="w-4 h-4" />
                            {logo || editingCompany?.image ? "Change Logo" : "Upload Logo"}
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

            </ModalHeader>

            <ModalBody>
                <div className="grid grid-cols-2 gap-5">
                    {/* Company Name */}
                    <div>
                        <Label color={errors.company ? "failure" : "gray"} htmlFor="company">Company / Branch Name</Label>
                        <TextInput
                            id="company"
                            placeholder="Enter Company Name "
                            value={company}
                            color={errors.company ? "failure" : "gray"}
                            onChange={(e) => {
                                setCompany(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("company");
                                }
                            }}

                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}
                    </div>


                    {/* Status */}
                    <div>
                        <Label color={errors.status ? "failure" : "gray"} htmlFor="status">Status</Label>
                        <Select
                            id="status"
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("status");
                                }
                            }}
                            color={errors.status ? "failure" : "gray"}
                        >
                            <option value="">Select status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                        </Select>
                        {errors.status && (
                            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <Label color={errors.email ? "failure" : "gray"} htmlFor="email">Email</Label>
                        <TextInput
                            id="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("email");
                                }
                            }}

                            color={errors.email ? "failure" : "gray"}

                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}

                    </div>

                    {/* Contact Number */}
                    <div>
                        <Label color={errors.number ? "failure" : "gray"} htmlFor="number">Number</Label>
                        <TextInput
                            id="number"
                            placeholder="Contact Number"
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("number");
                                }
                            }}

                            color={errors.number ? "failure" : "gray"}
                        />
                        {errors.number && (
                            <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                        )}
                    </div>

                    {/* Website */}
                    <div>
                        <Label color={errors.website ? "failure" : "gray"} htmlFor="website">Website</Label>
                        <TextInput
                            id="website"
                            placeholder="Enter link"
                            value={website}
                            onChange={(e) => {
                                setWebsite(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("website");
                                }
                            }}

                            color={errors.website ? "failure" : "gray"}
                        />

                        {errors.website && (
                            <p className="text-red-500 text-sm mt-1">{errors.website}</p>
                        )}

                    </div>

                    {/* Address */}
                    <div>
                        <Label color={errors.website ? "failure" : "gray"} htmlFor="address">Address</Label>
                        <TextInput
                            id="address"
                            placeholder="Enter location"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("address");
                                }
                            }}

                            color={errors.address ? "failure" : "gray"}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <Label htmlFor="text">subscribe_link</Label>
                    <TextInput
                        id="text"
                        placeholder="name@setsubscribe_link.com"
                        value={subscribe_link}
                        onChange={(e) => {
                            setsubscribe_link(e.target.value);
                            if (e.target.value.trim()) {
                                clearError("subscribe_link");
                            }
                        }}

                    />
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