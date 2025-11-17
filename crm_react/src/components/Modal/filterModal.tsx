import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
// import { DateRange, type Range, type RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { useState } from "react";
import { Datepicker, Label, Select } from "flowbite-react";
interface FilterModalProps {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterModal({ openFilter, setOpenFilter }: FilterModalProps) {


  return (
    <Modal show={openFilter} onClose={() => setOpenFilter(false)}>
      <ModalHeader>Filter Options
        <div className="space-y-6 ">
          <div className="pt-4 flex items-center gap-4 max-w-[400px]">
            <Datepicker />-<Datepicker />
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="grid grid-cols-2 gap-8">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>

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
        <p
          onClick={() => setOpenFilter(false)}
          className="cursor-pointer text-center justify-start text-sky-500 text-sm font-medium font-['Poppins'] leading-5"
        >
          Clear All Filters
        </p>
      </ModalFooter>
    </Modal>
  );
}
