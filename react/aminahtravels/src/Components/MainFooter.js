import React from 'react'

function MainFooter() {
    return (
        <footer className="bg-[#18361B] overflow-hidden">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-20">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="assets/images/footer-logo.png" className="h-12 me-3" alt="FlowBite Logo" />
                            {/* <!-- <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> --> */}
                        </a>

                        <p className="footer-para mt-5 xl:w-[390px]">Note: All fares advertised are subject to availability and
                            start from the prices we have mentioned. Fares are only guaranteed until ticketed. Offers may be
                            withdrawn without any prior notice.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 footer-heading">Quick Links</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="footer-link hover:underline">Home</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="footer-link hover:underline">Umrah Packages</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="footer-link hover:underline">Umrah Package
                                        Citywise</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="footer-link hover:underline">Hajj</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="footer-link hover:underline">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 footer-heading">Our Guide</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">Visa Services</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">How to perform Umrah</a>
                                </li>
                                <li className="mb-4 xl:w-[200px]">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline  ">Visa Services Documentation & Requirements</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">Saudi Arabia Business Visa</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">Vaccination Requirements</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">Safety and Security</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                        className="footer-link hover:underline ">Local Laws and Customs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 footer-heading">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="footer-link hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="footer-link hover:underline">Terms of Services</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="footer-link hover:underline">FAQ</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="footer-link hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between lg:float-right mb-10">
                    <span className="Copyright">© Copyright 2025 Travigence as Amina Travels - Company Number<a
                        href="https://flowbite.com/" className="hover:underline">- Company Number 15101982</a>. All Rights
                        Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter