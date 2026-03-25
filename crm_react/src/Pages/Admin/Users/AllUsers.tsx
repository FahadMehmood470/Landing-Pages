import { useEffect, useState } from "react";
import BreackIcon from "../../../assets/images/details_Breakdown.svg";
import Add_icon from "../../../assets/images/Add_icon.svg";
// import AddAgentModel from "../Companies/AddUserModal";
import UserList from "./UserList";
import AddUserModal from "../../../components/Modal/AddUserModal";
import { type User } from "../../../types/user";

// import AddAgentModel from "./AddAgentModel";
const AllUsers = () => {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    const [refetchFlag, setRefetchFlag] = useState(0);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(timer);
    }, [search]);
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
                        Users
                    </span>
                </div>
                <div className="flex  items-center gap-5">

                    <form className="mx-auto">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="block w-full p-3 ps-10 text-zinc-500 text-base font-normal font-['Poppins'] border border-gray-300 rounded-lg bg-zinc-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search user"
                                required
                            />
                        </div>
                    </form>

                    <div className="flex items-center justify-center gap-2 px-4 py-3 bg-black rounded-lg cursor-pointer" onClick={() => {
                        setEditingUser(null);
                        setOpenModal(true);
                    }}
                    >
                        <img src={Add_icon} alt="Lock Folder" className="w-5 h-5" />
                        <span className="text-white text-base font-medium font-poppins leading-tight">Add New User</span>
                    </div>

                </div>

                {openModal && (
                    <AddUserModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        editingUser={editingUser}
                        onUserAdded={() => setRefetchFlag(prev => prev + 1)}
                        onUserUpdated={() => setRefetchFlag(prev => prev + 1)}
                    />

                )}

            </div >
            <UserList
                search={debouncedSearch}
                refetchFlag={refetchFlag}
                // updatedUser={updatedUser}
                onEdit={(user) => {
                    setEditingUser(user);
                    setOpenModal(true);
                }}
            />

        </>
    )
}

export default AllUsers