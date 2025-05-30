import React from 'react'

function UmrahPackageFilterSection() {
  return (
    <div className="container mx-auto px-4 lg:px-12 mt-12">
        <div className="py-4 xl:flex sm:justify-between umrah-month">
            <h1>November Umrah</h1>
            <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis est nisi, sit
                amet pharetra.
            </p>
        </div>

        <div className="bg-pkg">

        </div>


        <div className="bg-form-dropdowns mt-5 lg:mt-20 p-8 gap-8">
            <div className="grid sm:grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <select className="dropdown-select appearance-none mt-4 lg:mt-1">
                    <option>Select Date</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>

                <select className="dropdown-select appearance-none mt-4 lg:mt-1">
                    <option>No. of Passengers</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>

                <select className="dropdown-select appearance-none mt-4 lg:mt-1">
                    <option>Select Destination</option>
                    <option>Location 1</option>
                    <option>Location 2</option>
                </select>

                {/* <!-- Range Slider (Spanning Two Columns) --> */}
                <div className="lg:col-span-1 mt-4 lg:mt-1">
                    <div className="flex justify-between mb-2">
                        <span className="text-white min-max-slider">Min: <span id="minValue">£840</span></span>
                        <span className="text-white min-max-slider">Max: <span id="maxValue">£1140</span></span>
                    </div>
                    <div className="relative">
                        <input type="range" id="minSlider" min="840" max="1140" value="840"
                            className="range-slider absolute w-full h-2 bg-green-700 rounded-lg cursor-pointer z-10"/>
                        <input type="range" id="maxSlider" min="840" max="1140" value="1140"
                            className="range-slider absolute w-full h-2 bg-green-700 rounded-lg cursor-pointer z-20"/>
                    </div>
                </div>


                {/* <!-- Search Button --> */}
                <div>
                    <a href="#" className="Search-btn  mr-5">
                        Search
                    </a>
                </div>
            </div>
        </div>






    </div>

  )
}

export default UmrahPackageFilterSection