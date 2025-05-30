import React from 'react'

function UmrahPackageInfo() {
    return (
        <div className="container mx-auto px-4 mt-12">
            <div>
                <h1 className="Umrah-details-h1">7 Night July Umrah Packages - 3 Stars</h1>
            </div>
            <div className="overflow-x-auto flex gap-6 no-scrollbar mt-5 md:mt-12 lg:mt-16 xl:mt-20" id="scrollContainer">
                <img src="assets/images/Package-details.jpg" alt="" />
                <img src="assets/images/Package-details.jpg" alt="" />
                <img src="assets/images/Package-details.jpg" alt="" />
                <img src="assets/images/Package-details.jpg" alt="" />
                <img src="assets/images/Package-details.jpg" alt="" />
            </div>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-3 xl:gap-16">
                <div className="col-span-8">
                    <div
                        className="whitelist-tag p-2 lg:p-4 border rounded-lg mt-0 mb-4 shadow-sm bg-white button-display-none">
                        {/* <!-- Price Section --> */}
                        <div className="flex justify-between items-center mb-3 m-1 lg:m-4">
                            <h2 className="whitelist-price">Price</h2>
                            <p className="whitelist-pound">£840pp</p>
                        </div>

                        <hr className="mb-3 m-1 lg:m-4" />

                        {/* <!-- Wishlist Section --> */}
                        <div className="flex justify-between m-1 lg:m-4">
                            <div className="flex items-center gap-2 mb-3">
                                <img src="assets/images/bookmark.png" alt="Bookmark" className="w-5 h-5 lg:w-7 lg:h-7" />
                                <h2 className="Add-to-whitelist">Add to Wishlist</h2>
                            </div>

                            {/* <!-- Share and Print Icons --> */}
                            <div className="flex items-center gap-3">
                                <img src="assets/images/share.png" alt="Share" className="w-5 h-5 lg:w-7 lg:h-7" />
                                <img src="assets/images/printer.png" alt="Print" className="w-5 h-5 lg:w-7 lg:h-7" />
                            </div>
                        </div>
                    </div>

                    <div className=" lg:flex justify-between items-center">
                        <div>
                            <h2 className="Hotels-stay mb-4">Hotels and Stays</h2>
                        </div>
                        <div className="green-strip flex justify-between items-center gap-4 ">
                            <div className="flex gap-1">
                                <img src="assets/images/star.svg" className="h-auto max-w-full ml-3" alt="" />
                                <img src="assets/images/star.svg" className="h-auto max-w-full" alt="" />
                                <img src="assets/images/star.svg" className="h-auto max-w-full" alt="" />
                            </div>
                            <div>
                                <p className="room-sharing mr-3">4 People Sharing Room</p>
                            </div>
                        </div>
                    </div>
                    <div className="hotels-details">
                        <h2 className="mt-5">Hotel - Al Riffa Al Azizia– (Makkah)</h2>
                        <p className="mt-3">Featuring a café and restaurant, Elaf Taiba is just minutes’ walk from the Haram al
                            Shareef and
                            right in front of the holy Prophet’s Mosque. It offers free WiFi in lobby. All rooms of Elaf
                            Taiba Hotel are equipped with satellite TV and a private bathroom. Some rooms have a picturesque
                            view of the Masjid Al-Nabawi mosque. The Al Hamra café serves daily breakfast buffet, snacks and
                            a variety of French pastries. The hotel’s main restaurant, Al Andalus, offers a selection of
                            continental, Asian and Arabic delicacies for lunch and dinner.</p>
                        <h2 className="mt-5">Hotel - Elaf Taiba – (Madinah)</h2>
                        <p className="mt-3">Featuring a café and restaurant, Elaf Taiba is just minutes’ walk from the Haram al
                            Shareef and
                            right in front of the holy Prophet’s Mosque. It offers free WiFi in lobby. All rooms of Elaf
                            Taiba Hotel are equipped with satellite TV and a private bathroom. Some rooms have a picturesque
                            view of the Masjid Al-Nabawi mosque. The Al Hamra café serves daily breakfast buffet, snacks and
                            a variety of French pastries. The hotel’s main restaurant, Al Andalus, offers a selection of
                            continental, Asian and Arabic delicacies for lunch and dinner.</p>
                    </div>
                </div>
                <div className="col-span-4 ">
                    {/* <!-- Content for the right column --> */}

                    <div className="whitelist-tag p-4 border rounded-lg shadow-sm bg-white button-display-block">
                        {/* <!-- Price Section --> */}
                        <div className="flex justify-between items-center mb-3 m-4">
                            <h2 className="whitelist-price">Price</h2>
                            <p className="whitelist-pound">£840pp</p>
                        </div>

                        <hr className="mb-3 m-4" />

                        {/* <!-- Wishlist Section --> */}
                        <div className="flex justify-between m-4">
                            <div className="flex items-center gap-2 mb-3">
                                <img src="assets/images/bookmark.png" alt="Bookmark" className="w-7 h-7" />
                                <h2 className="Add-to-whitelist">Add to Wishlist</h2>
                            </div>

                            {/* <!-- Share and Print Icons --> */}
                            <div className="flex items-center gap-3">
                                <img src="assets/images/share.png" alt="Share" className="w-7 h-7" />
                                <img src="assets/images/printer.png" alt="Print" className="w-7 h-7" />
                            </div>
                        </div>
                    </div>
                    <form action="" className="lg:mt-10 mb-5 lg:mb-10 xl:mb-20">
                        <div className="hero-section mt-10 lg:mt-1">
                            <div className="m-6 ">

                                <input type="text" placeholder="Full Name" className="input-field w-full mt-6" />
                                <input type="text" placeholder="Contact Number" className="input-field w-full mt-6" />
                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mt-6 ">
                                    <select className="dropdown-select  appearance-none relative">
                                        <option disabled selected>Select Date </option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>


                                    <select className="dropdown-select appearance-none relative margin-top ">
                                        <option disabled selected>No. of Passengers</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>

                                {/* <!-- Input Fields --> */}

                                <textarea placeholder="Your Message" className="Message-field w-full mt-6" rows="3" />

                                {/* <!-- Submit Button --> */}
                                <button className="book-enquiry mt-6 w-full">
                                    Send Inquiry
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default UmrahPackageInfo