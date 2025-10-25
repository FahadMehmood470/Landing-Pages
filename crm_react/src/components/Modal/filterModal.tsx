import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

interface FilterModalProps {
    openFilter: boolean,
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FilterModal({ openFilter, setOpenFilter }: FilterModalProps) {
    return (
        <>
            <Modal show={openFilter} onClose={() => setOpenFilter(false)}>
                <ModalHeader>Filter Options</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Apply filters here based on your folder data.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            You can include fields like Folder #, Passenger Name, or Travel Date.
                        </p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={() => setOpenFilter(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 rounded-lg cursor-pointer"
                    >
                        <span className="text-white text-base font-medium font-poppins leading-tight">
                            Apply Filter
                        </span>
                    </button>
                    {/* <Bu tton className="text-sky-500 text-sm font-medium font-['Poppins'] leading-5" onClick={() => setOpenFilter(false)}>Apply</Button> */}
                    {/* <Button color="alternative" >
                        Cancel
                    </Button> */}


                    <p onClick={() => setOpenFilter(false)} className="cursor-pointer text-center justify-start text-sky-500 text-sm font-medium font-['Poppins'] leading-5">Clear All FIlters</p>
                </ModalFooter>
            </Modal>
        </>
    );
}
