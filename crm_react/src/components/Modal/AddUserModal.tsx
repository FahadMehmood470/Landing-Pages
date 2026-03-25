import { Button, Modal, ModalBody, ModalFooter, Select, Label, ModalHeader, TextInput } from "flowbite-react";
import Inside_image from "../../assets/images/inside_image.svg";
// import upload_Logo from "../../assets/images/upload_logo.svg";
import TrashIcon from "../../assets/images/deleate_icon.svg";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { UsersAPI } from "../../api/usersAPI";
import Companyapi from "../../api/Companyapi";
import { type User } from "../../types/user";

interface ModalProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    onUserAdded?: () => void;      // ✅ optional
    editingUser?: User | null;
    onUserUpdated?: () => void;    // already optional
}

const Base_Upload_Url = import.meta.env.VITE_BASE_UPLOAD_URL;

const AddUserModal = ({ openModal, setOpenModal, onUserAdded, editingUser, onUserUpdated }: ModalProps) => {

    const [name, setName] = useState("");
    const [companies, setCompanies] = useState<any[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [company, setCompany] = useState<string | "">("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const [number, setNumber] = useState("");
    const [agent_directline, setAgentDirectline] = useState("");

    const [status, setStatus] = useState("");
    const [utype, setuType] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [removeImage, setRemoveImage] = useState(false);

    const [logo, setLogo] = useState<File | null>(null);

    const onCloseModal = () => {
        setOpenModal(false);
        setEmail("");
        setAgentDirectline("");
        setStatus("");
        setLogo(null);
    };

    useEffect(() => {
        if (openModal) {
            CompaniesData();
        }
    }, [openModal]);

    useEffect(() => {
        if (!openModal) return;

        if (editingUser) {
            // Edit mode
            setRemoveImage(false);
            setName(editingUser.name || "");
            setCompany(
                editingUser.companies?.[0]?.id
                    ? String(editingUser.companies[0].id)
                    : ""
            );
            setEmail(editingUser.email || "");
            setStatus(editingUser.status === 1 ? "active" : "inactive");
            setuType(editingUser.utype || "");
            setAgentDirectline(editingUser.agent_directline ? String(editingUser.agent_directline) : "");
            setPassword("");
            setLogo(null);
        } else {
            // Add mode
            setName("");
            setCompany("");
            setEmail("");
            setStatus("");
            setuType("");
            setAgentDirectline("");
            setPassword("");
            setLogo(null);
            setRemoveImage(false);
        }
    }, [openModal, editingUser]);


    const existingImage =
        editingUser?.image && editingUser.image !== ""
            ? `${Base_Upload_Url}/user/${editingUser.image}`
            : null;


    const CompaniesData = async () => {
        try {
            const res = await Companyapi.get("/companies")
            setCompanies(res.data.data)
        } catch (error) {
            console.error("Company fetch error", error);

        }
    }

    const onSaveModal = async () => {
        if (!validate()) {
            return;
        }

        if (isSubmitting) return;
        setIsSubmitting(true);

        if (!name) {
            setIsSubmitting(false);
            return Swal.fire("Name is required", "", "error");
        }


        // if (!company) {
        //     setIsSubmitting(false);
        //     return Swal.fire("company is required", "", "error");
        // }

        if (!email) {
            setIsSubmitting(false);
            return Swal.fire("email is required", "", "error");
        }

        if (!status) {
            setIsSubmitting(false);
            return Swal.fire("status is required", "", "error");
        }

        // if (!utype) {
        //     setIsSubmitting(false);
        //     return Swal.fire("utype is required", "", "error");
        // }

        if (!editingUser && !password) {
            setIsSubmitting(false);

            return Swal.fire("Password is required", "", "error");
        }

        if (!editingUser && password.length < 6) {
            setIsSubmitting(false);
            return Swal.fire("Password must be at least 6 characters", "", "error");
        }

        const formData = new FormData();
        formData.append("name", name);
        // if (utype !== "sadmin") {
        //     formData.append("company", String(company));
        // }

        formData.append("company", company);


        formData.append("email", email);
        if (!editingUser && password) {
            formData.append("password", password);
        }
        formData.append("agent_directline", agent_directline);
        formData.append("status", status === "active" ? "1" : "0");
        formData.append("utype", utype);
        formData.append("password", password);

        if (logo) {
            formData.append("image", logo);
        }

        if (removeImage) {
            formData.append("remove_image", "1");
        }

        // if (utype !== "sadmin") {
        //     formData.append("company", String(company));
        // }
        // if (logo) formData.append("image", logo);

        try {
            if (editingUser) {
                await UsersAPI.update(editingUser.id, formData);
                Swal.fire("Success", "User updated successfully", "success");
                onUserUpdated?.();
            } else {
                await UsersAPI.create(formData);
                Swal.fire("Success", "User added successfully", "success");
                onUserAdded?.();
            }

            setOpenModal(false);
        } catch (error: any) {
            const errors = error.response?.data?.errors as Record<string, string[]> | undefined;

            if (errors) {
                const firstError = Object.values(errors)[0]?.[0];
                Swal.fire("Error", firstError ?? "Something went wrong", "error");
            }


        } finally {
            setIsSubmitting(false);
        }
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(e.target.files[0]);
            setRemoveImage(false);
        }
    };



    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!name) newErrors.name = "User name is required";
        // if (!company) newErrors.company = "Company is required";
        // if (utype !== "sadmin" && !company) {
        //     newErrors.company = "Company is required";
        // }

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!agent_directline.trim() || agent_directline.length <= 7) newErrors.agent_directline = "Number must be at least 6 characters";
        if (!status) newErrors.status = "Status is required";
        if (!editingUser && (!password || password.length < 6)) {
            newErrors.password = "Password must be at least 6 characters";
        }
        // if (!utype) newErrors.utype = "Type is required";



        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
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
        <Modal show={openModal} onClose={onCloseModal}>
            <ModalHeader>
                <span className="text-lg font-semibold">
                    {editingUser ? "Edit User" : "Add New User"}
                </span>


                <div className="flex items-center gap-4 mt-5">
                    {/* NEW IMAGE PREVIEW */}
                    {logo && (
                        <div className="relative w-24 h-24">
                            <img
                                src={URL.createObjectURL(logo)}
                                className="w-24 h-24 rounded-md object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => setLogo(null)}
                                className="absolute top-1 right-1 bg-white p-1 rounded-full"
                            >
                                <img src={TrashIcon} className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {/* EXISTING IMAGE */}
                    {!logo && existingImage && !removeImage && (
                        <div className="relative w-24 h-24">
                            <img
                                src={existingImage}
                                className="w-24 h-24 rounded-md object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => setRemoveImage(true)}
                                className="absolute top-1 right-1 bg-white p-1 rounded-full"
                            >
                                <img src={TrashIcon} className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {/* PLACEHOLDER */}
                    {!logo && (!existingImage || removeImage) && (
                        <div className="w-24 h-24 p-4 rounded-md border-2 border-dashed flex items-center justify-center">
                            <img src={Inside_image} className="w-12 h-12" />
                        </div>
                    )}

                    {/* UPLOAD BUTTON */}
                    <label
                        htmlFor="logoUpload"
                        className="cursor-pointer px-4 py-2 border rounded-md text-sm"
                    >
                        {logo
                            ? "Change Logo"
                            : existingImage && !removeImage
                                ? "Change Logo"
                                : "Upload Logo"}

                    </label>

                    <input
                        id="logoUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                    />
                </div>

            </ModalHeader>

            <ModalBody>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <Label color={errors.name ? "failure" : "gray"} htmlFor="name">Agent Neme</Label>
                        <TextInput
                            id="name"
                            placeholder="Ahmed Abrar"
                            value={name}
                            color={errors.name ? "failure" : "gray"}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("name");
                                }
                            }}

                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <Label color={errors.company ? "failure" : "gray"} htmlFor="company">Assigned Company Name</Label>
                        <Select
                            // disabled={utype === "sadmin"}
                            value={company}
                            color={errors.company ? "failure" : "gray"}

                            onChange={(e) => {
                                setCompany(e.target.value === "" ? "" : String(e.target.value))
                                if (e.target.value.trim()) {
                                    clearError("company");
                                }
                            }


                            }
                        >
                            <option disabled value="">Select Company</option>
                            <option value="sadmin">Admin</option>

                            {companies.map((item) => (
                                <>
                                    <option key={item.id} value={item.id}>
                                        {item.title}
                                    </option>
                                    ``
                                </>
                            ))}


                        </Select>
                        {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                        )}

                    </div>

                    {/* Email */}
                    <div>
                        <Label color={errors.email ? "failure" : "gray"} htmlFor="email">Email</Label>
                        <TextInput
                            id="email"
                            placeholder="name@company.com"
                            value={email}
                            color={errors.email ? "failure" : "gray"}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("email");
                                }
                            }}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}

                    </div>
                    {/* Password */}
                    <div>

                        <div className="relative">
                            {
                                <>
                                    <div>
                                        <Label color={errors.password ? "failure" : "gray"} htmlFor="password">Password</Label>
                                        <TextInput
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            color={errors.password ? "failure" : "gray"}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                if (e.target.value.trim()) {
                                                    clearError("password");
                                                }
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <HiEyeOff className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <HiEye className="h-5 w-5 text-gray-500" />
                                        )}
                                    </div>
                                </>
                            }

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}

                        </div>
                    </div>

                    {/* Contact Number */}
                    <div>
                        <Label color={errors.agent_directline ? "failure" : "gray"} htmlFor="agent_directline">Number</Label>
                        <TextInput
                            id="agent_directline"
                            placeholder="Contact Number"
                            value={agent_directline}
                            color={errors.agent_directline ? "failure" : "gray"}
                            onChange={(e) => {
                                setAgentDirectline(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("agent_directline");
                                }
                            }}

                        />
                        {errors.agent_directline && (
                            <p className="text-red-500 text-sm mt-1">{errors.agent_directline}</p>
                        )}
                    </div>

                    {/* Status */}
                    <div>
                        <Label color={errors.status ? "failure" : "gray"} htmlFor="status">Status</Label>
                        <Select
                            id="status"
                            value={status}
                            color={errors.status ? "failure" : "gray"}

                            onChange={(e) => {
                                setStatus(e.target.value);
                                if (e.target.value.trim()) {
                                    clearError("status");
                                }
                            }}

                        >
                            <option disabled value="">Select status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                        </Select>
                        {errors.status && (
                            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                        )}
                    </div>

                </div>
                {/* Status */}
                <div className="mt-4">
                    <Label color={errors.utype ? "failure" : "gray"} htmlFor="status">user Type</Label>
                    <Select
                        id="status"
                        value={utype}
                        onChange={(e) => {
                            setuType(e.target.value);
                            if (e.target.value.trim()) {
                                clearError("utype");
                            }
                        }}
                        color={errors.utype ? "failure" : "gray"}
                    >
                        <option value="">Select UserType</option>
                        <option value="sadmin">Super Admin</option>
                        <option value="cadmin">Manager</option>
                        <option value="Accountant">Accountant</option>
                        <option value="agent">Agent</option>

                    </Select>
                    {errors.utype && (
                        <p className="text-red-500 text-sm mt-1">{errors.utype}</p>
                    )}
                </div>

            </ModalBody>

            <ModalFooter>
                <Button color="dark" onClick={onSaveModal}>  {isSubmitting ? "Saving..." : "Submit"}</Button>
                <Button color="alternative" onClick={onCloseModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AddUserModal