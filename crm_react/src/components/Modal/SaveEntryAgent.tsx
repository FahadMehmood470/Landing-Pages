import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from "flowbite-react";
interface SaveEntryAgentProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveEntryAgent = ({ setOpenModal, openModal }: SaveEntryAgentProps) => {
    const [selectedOption, setSelectedOption] = React.useState<"lead" | "booking">("lead");

    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>

            <ModalBody>
                <h2 className="text-center text-black text-3xl font-medium font-['Poppins']">Save Entry As ?</h2>

                <p className="text-center text-subheading-color text-base font-normal font-['Inter'] mb-4">Choose how you want to save this entry</p>
                {/* Options */}
                <div className="space-y-4">
                    <label
                        className={`block border p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200 ${selectedOption === "lead" ? "outline-sky-500 bg-[#F3F3F5]" : "border-gray-300"
                            }`}
                    >
                        <div className='flex items-center justify-start'>
                            <input
                                type="radio"
                                name="saveOption"
                                value="lead"
                                className="mr-3"
                                checked={selectedOption === "lead"}
                                onChange={() => setSelectedOption("lead")}
                            />

                            <div>
                                <span className="text-Input-Lable-Color text-xl font-bold font-['Inter']">Save as Lead</span>
                                <p className="text-Input-field-Text-Color text-base font-normal font-['Inter']">Keep this record as a lead for follow-up.</p>
                            </div>
                        </div>
                    </label>

                    <label
                        className={`block border p-4 cursor-pointer rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-200 ${selectedOption === "booking" ? "outline-sky-500 bg-[#F3F3F5]" : "border-gray-300"
                            }`}
                    >
                        <div className='flex items-center '>
                            <input
                                type="radio"
                                name="saveOption"
                                value="booking"
                                className="mr-3"
                                checked={selectedOption === "booking"}
                                onChange={() => setSelectedOption("booking")}
                            />
                            <div>
                                <span className="text-Input-Lable-Color text-xl font-bold font-['Inter']">Save as Confirmed Booking</span>
                                <p className="text-Input-field-Text-Color text-base font-normal">Mark this as a confirmed and send to manager for approval.</p>
                            </div>
                        </div>
                    </label>
                </div>
            </ModalBody>
            <ModalFooter className='flex flex-row items-center justify-end'>
                <Button color="light" onClick={() => setOpenModal(false)}>
                    Cancel
                </Button>
                <Button color="cyan" onClick={() => {
                    console.log("Saved as:", selectedOption);
                    setOpenModal(false);
                }}>
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default SaveEntryAgent