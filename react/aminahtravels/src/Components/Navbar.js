import React from 'react'

function Navbar() {
    return (
        <div className='overflow-hidden p-1'>
            <div className="container mx-auto px-4  mt-12">
                <div className="navbar flex justify-between items-center mt-12">
                    <div className="flex items-center space-x-4">
                        <img src="assets/images/logo.png" className="h-10 max-w-full" alt="Logo" />
                    </div>

                    <div className=" lg:flex space-x-8 nav d-block ">
                        <a href="#" className="">Home</a>
                        <a href="#" className=""> <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1"
                            className="flex items-center justify-between w-full nav">Packages
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg></button>
                            <div id="dropdownNavbar1"
                                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>

                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </div>
                            </div>
                        </a>
                        <a href="#" className=""> <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar"
                            className="flex items-center justify-between w-full nav">Umrah Package Citywise
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg></button>
                            <div id="dropdownNavbar"
                                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="">Hajj</a>
                        <a href="#" className="">Beat My Price</a>
                        <a href="#" className="">Contact</a>

                    </div>

                    <div className="flex space-x-4 items-center ">
                        <a href="tel:02030628924" className=" flex items-center phone-call gap-2">
                            <img src="assets/images/phone-call.png" className="h-6" alt="Phone Icon" />
                            020 3062 8924
                        </a>

                        <a href="#" className="enquire-now d-block">Enquire Now</a>


                        <div className="d-none">







                            <div className="text-center">
                                <button className="" type="button" data-drawer-target="drawer-navigation"
                                    data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                                    <img src="assets/images/menu.svg" className="h-auto max-w-full cursor-pointer" alt="" />
                                </button>
                            </div>

                            <div id="drawer-navigation"
                                className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
                                tabindex="-1" aria-labelledby="drawer-navigation-label">
                                <h5 id="drawer-navigation-label"
                                    className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Close menu</span>
                                </button>
                                <div className="py-4 overflow-y-auto">
                                    <ul className="space-y-2 font-medium">
                                        <li>
                                            <a href="#"
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M10.707 1.707a1 1 0 0 0-1.414 0l-8 8A1 1 0 0 0 2 11h1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-8-8Z" />
                                                </svg>
                                                <span className="ms-3">Home</span>
                                            </a>
                                        </li>

                                        <li className="relative">
                                            <button id="dropdownPackagesBtn" data-dropdown-toggle="dropdownPackages"
                                                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M21 16V8a2 2 0 0 0-1.2-1.8l-7-3a2 2 0 0 0-1.6 0l-7 3A2 2 0 0 0 3 8v8a2 2 0 0 0 1.2 1.8l7 3a2 2 0 0 0 1.6 0l7-3A2 2 0 0 0 21 16Zm-9 4.18L5 17V9l7 3Zm1-8.36L6.12 8 12 5.82 17.88 8Zm1 8.36V12l7-3v8Z" />
                                                </svg>

                                                <span className="flex-1 ms-3 whitespace-nowrap text-left">Packages</span>

                                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                </svg>
                                            </button>

                                            <div id="dropdownPackages"
                                                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownPackagesBtn">
                                                    <li>
                                                        <a href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Citywise
                                                            Packages</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Special
                                                            Offers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="relative">
                                            <button id="dropdownLink1" data-dropdown-toggle="dropdownList1"
                                                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                                </svg>

                                                <span className="flex-1 ms-3 whitespace-nowrap text-left text-sm">Umrah Package
                                                    Citywise</span>

                                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="m1 1 4 4 4-4"></path>
                                                </svg>
                                            </button>

                                            <div id="dropdownList1"
                                                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownLink1">
                                                    <li><a href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                    </li>
                                                    <li><a href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                    </li>
                                                    <li><a href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                                        Out</a></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <a href="#"
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M3 4a1 1 0 0 1 .553-.894l8-4a1 1 0 0 1 .894 0l8 4A1 1 0 0 1 21 4v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9-2.236L5.618 4 12 7.236 18.382 4 12 1.764ZM5 6.618V19h14V6.618L12 10.382 5 6.618Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Hajj</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M17.707 10.293 9.707 2.293A1 1 0 0 0 9 2H3a1 1 0 0 0-1 1v6c0 .265.105.52.293.707l8 8a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414ZM6.5 6A1.5 1.5 0 1 1 5 4.5 1.5 1.5 0 0 1 6.5 6Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Beat My Price</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path
                                                        d="M2 2a2 2 0 0 0-2 2v.217l10 5.714 10-5.714V4a2 2 0 0 0-2-2H2Zm18 4.383-9.34 5.34a1 1 0 0 1-1.32 0L0 6.383V12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.383Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M15 0H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 1h8a1 1 0 0 1 1 1v3H5V2a1 1 0 0 1 1-1zm8 15H6V7h8v9z" />
                                                    <path fill-rule="evenodd"
                                                        d="M13.293 6.293a1 1 0 0 1 1.414 1.414L9 13.414 7.293 11.707a1 1 0 0 1 1.414-1.414L9 10.586l4.293-4.293z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Book Now</span>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar