import React from 'react'

function ReachUsCards() {
  return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-4 lg:mt-10  mb-5 lg:mb-16 ">

        <div className="mt-5 lg:mt-20 mb-5 lg:mb-20">
            <h2 className="reach-us">Reach Out to Us</h2>
        </div>
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-8 lg:mt-16 gap-8 px-4 lg:px-16 over gap-8">
            {/* <!-- Phone Card --> */}
            <div
                className="relative bg-[#EBEBEB] p-8 shadow-lg rounded-[24px] text-center w-[100%] lg:w-90 mx-auto mt-10 sm:mt-5  mb-10 sm:mb-5">
                <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1E4D24] p-3 rounded-[16px] shadow-lg">
                    <img src="assets/images/reachus.png" alt="Phone Icon" className="w-16 h-16"/>
                </div>

                <div className="mt-12 Reach-section">
                    <h2 className=" mb-2 uppercase">PHONE</h2>
                    <span className="block mt-4 mb-5">020 3062 8924</span>

                    <a href="#" className="mt-4">
                        Contact Agent

                    </a>
                </div>
            </div>

            {/* <!-- Address Card 1 --> */}
            <div
                className="relative bg-[#EBEBEB] p-8 shadow-lg rounded-[24px] text-center w-[100%]  lg:w-90 mx-auto mt-10 sm:mt-5  mb-10 sm:mb-5">
                <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1E4D24] p-3 rounded-[16px] shadow-lg">
                    <img src="assets/images/reachus.png" alt="Phone Icon" className="w-16 h-16"/>
                </div>

                <div className="mt-12 Reach-section">
                    <h2 className=" mb-2 uppercase">PHONE</h2>
                    <span className="block mt-4 mb-5">020 3062 8924</span>

                    <a href="#" className="mt-4">
                        Contact Agent

                    </a>
                </div>
            </div>

            {/* <!-- Address Card 2 --> */}
            <div
                className="relative bg-[#EBEBEB] p-8 shadow-lg rounded-[24px] text-center w-[100%]  lg:w-90 mx-auto mt-10 sm:mt-5  mb-10 sm:mb-5">
                <div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#1E4D24] p-3 rounded-[16px] shadow-lg">
                    <img src="assets/images/reachus.png" alt="Phone Icon" className="w-16 h-16"/>
                </div>

                <div className="mt-12 Reach-section">
                    <h2 className=" mb-2 uppercase">PHONE</h2>
                    <span className="block mt-4 mb-5">020 3062 8924</span>

                    <a href="#" className="mt-4">
                        Contact Agent

                    </a>
                </div>
            </div>
        </div>



    </div>
  )
}

export default ReachUsCards