import BreackIcon from "../../../assets/images/details_Breakdown.svg";

const DeleteFolder = () => {
  return (
    <div className="container mx-auto">
      <div className=" rounded-xl mt-12 bg-[#F0F0F0]">
        <div className="flex justify-between items-center p-6">
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-br from-white to-black rounded p-3 w-12 h-12 flex items-center justify-center">
              <img
                src={BreackIcon}
                className="w-7 h-7"
                alt="Create new folder"
              />
            </div>
            <span className="justify-start text-black text-xl font-semibold font-['Poppins']">
              Search Folder to Delete
            </span>
          </div>
        </div>
      </div>
        <form className="mx-auto mt-6">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
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
              id="default-search"
              className="block w-full p-5 ps-14 text-zinc-500 text-base font-normal font-['Poppins'] border border-gray-300 rounded-lg bg-zinc-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search anything"
              required
            />
          </div>
        </form>

    </div>
  )
}

export default DeleteFolder