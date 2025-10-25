import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { DateRange, type Range, type RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

interface FilterModalProps {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterModal({ openFilter, setOpenFilter }: FilterModalProps) {
  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <Modal show={openFilter} onClose={() => setOpenFilter(false)}>
      <ModalHeader>Filter Options</ModalHeader>
      <ModalBody>
        <div className="space-y-6">
          <div className="p-4 bg-white rounded-lg shadow-md w-fit mx-auto">
            <DateRange
              editableDateInputs={true}
              onChange={(item: RangeKeyDict) => setRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={range}
              className="border border-gray-300 rounded-lg"
            />
            <p className="mt-4 text-gray-700">
              Selected Range:{" "}
              <span className="font-semibold text-blue-600">
                {range[0].startDate?.toDateString()} → {range[0].endDate?.toDateString()}
              </span>
            </p>
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
