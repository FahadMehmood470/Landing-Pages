import React, { useState } from 'react'

function InquiryForm() {


    const [formData, setFormData] = useState({
        name: "",
        contactno: '',
        date: '',
        noofpassanger: '',
        message: ''
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
        if (!formData.name || !formData.contactno || !formData.date || !formData.contactno || !formData.message)
            alert("Please Complete Fields")
        else {
            console.log(formData)
            setFormData({
                name: '',
                contactno: '',
                date: "",
                noofpassanger: '',
                message: ''
            })
        }
    }














    return (
        <div className="container mx-auto  overflow-hidden lg:mr-[50px]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-5 lg:mt-20 py-8  mb-5 ">
                <div className="grid md:grid-cols-12 lg:grid-cols-12 gap-8">

                    <div className=" md:col-span-12 lg:col-span-5">

                        <div className="hero-section">
                            <div className="m-6 ">

                                <input name="name" type="text" placeholder="Full Name" className="input-field w-full mt-6" value={formData.name} onChange={handleChange} />
                                <input name='contactno' type="text" placeholder="Contact Number" className="input-field w-full mt-6" value={formData.contactno} onChange={handleChange} />
                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mt-6 " value={formData.date} onChange={handleChange}>
                                    <select name='date' className="dropdown-select  appearance-none relative">
                                        <option>Select Date</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>


                                    <select name='noofpassanger' className="dropdown-select appearance-none relative margin-top" value={formData.noofpassanger} onChange={handleChange}>
                                        <option>No. of Passengers</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>


                                <textarea name='message' placeholder="Your Message" className="Message-field w-full mt-6" rows="3" value={formData.message} onChange={handleChange} />

                                <button className="book-enquiry mt-6 w-full" onClick={bookInquiry}>Send Inquiry
                                </button>
                            </div>
                        </div>


                    </div>

                    <div
                        className="rounded-2xl md:col-span-12  lg:col-span-5 overflow-hidden bg-enquiry lg:ml-6 lg:mt-20 lg:float-right">
                        <div className="img-green-section2 z-10">
                            <div className="m-5 sm:m-6 md:m-8 lg:m-6">
                                <h2 className="Promo-umrah2">Get in touch</h2>
                                <p className="Promo-umrah-p2 mt-3 mb-3">For More Information</p>
                                {/* <p className="Promo-umrah-price">£840<span className="Promo-umrah-pound">pp</span></p>  */}
                            </div>
                        </div>
                    </div>




                </div>




            </div>
        </div>
    )
}

export default InquiryForm