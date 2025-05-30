import React, { useState } from 'react'

function InquiryPromoSection() {


    const [formData, setFormData] = useState({
        date: '',
        noofpassanger: '',
        name: "",
        contactno: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const bookInquiry = () => {
        if (!formData.date || !formData.noofpassanger || !formData.name || !formData.contactno || !formData.email)
            alert("Please Complete Fields")
        else {
            console.log(formData)
            setFormData({
                date: '',
                noofpassanger: '',
                name: "",
                contactno: '',
                email: ''
            })
        }
    }




    return (

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 mb-5 lg:mb-24 ">
            <div className="grid md:grid-cols-12 lg:grid-cols-12 gap-8">


                <div className=" md:col-span-12 lg:col-span-5">

                    <div className="hero-section">
                        <div className="m-6 ">
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4  ">
                                <select name="date" className="dropdown-select  appearance-none relative" value={formData.date} onChange={handleChange}>
                                    <option>Select Date</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>


                                <select name="noofpassanger" className="dropdown-select appearance-none relative margin-top" value={formData.noofpassanger} onChange={handleChange}>
                                    <option>No. of Passengers</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>

                            <input name="name" type="text" placeholder="Full Name" className="input-field w-full mt-6" value={formData.name} onChange={handleChange} />
                            <input name='contactno' type="text" placeholder="Contact Number" className="input-field w-full mt-6" value={formData.contactno} onChange={handleChange} />
                            <input name='email' type="email" placeholder="Email Id" className="input-field w-full mt-6" value={formData.email} onChange={handleChange} />

                            <button className="book-enquiry mt-6 w-full" onClick={bookInquiry}>
                                Book Inquiry
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-10 ">
                        <div className="Green-section1">
                            <div className="m-6">
                                <h2>300+</h2>
                                <p className="mt-2">Packages</p>
                            </div>
                        </div>
                        <div className="bg-section2 h-full">
                            <div className="m-6">
                                <h2>35000+</h2>
                                <p className="mt-2">Happy Passengers</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="md:col-span-12 lg:col-span-7 rounded-2xl overflow-hidden bg-image">
                    <div className="img-green-section z-10">
                        <div className="m-5 sm:m-6 md:m-8 lg:m-10">
                            <h2 className="Promo-umrah">Promo umrah packAGE</h2>
                            <p className="Promo-umrah-p mt-3 mb-3">5 Star Special Offer</p>
                            <p className="Promo-umrah-price">£840<span className="Promo-umrah-pound">pp</span></p>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default InquiryPromoSection