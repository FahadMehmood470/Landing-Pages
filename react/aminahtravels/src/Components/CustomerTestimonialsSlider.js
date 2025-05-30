import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function CustomerTestimonialsSlider() {
    return (
        <div className="bg-testimonial py-16">
            <div className="container mx-auto overflow-hidden">
                <div className="mt-5 lg:mt-20 flex flex-col items-center">
                    <h2 className="testimonials-heading">Testimonials</h2>
                    <h3 className="customers mt-5">What our customers say</h3>
                    <p className="mt-4 testimonials-text">Are Saying</p>
                </div>
                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    // pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 1, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                        1300: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                    className="mySwiper mt-[30px] lg:mt-20"
                >
                    {[1, 2, 3, 4].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative bg-white lg:rounded-[50px] p-5 lg:p-10 shadow-lg col-span-6 w- xl:w-[64%] lg:h-[369px] gap-4 mx-8 xl:mx-[200px]">
                                <div className="absolute Image-card overflow-hidden rounded-[50px] col-span-4">
                                    <img src="assets/images/testimonial1.jpg" className="w-full h-auto hide-on-small"
                                        alt="Testimonial Image" />
                                </div>
                                <div className="ml-[10px] lg:ml-[80px] testimonial-content col-span-8">
                                    <span className="">November 08, 2023</span>
                                    <h4 className="mt-5">Seamless coordination of return flights, providing peace of mind
                                        for</h4>
                                    <p className="mt-4">Pilgrims as they conclude their sacred journey. Round-trip airfare
                                        arrangements,
                                        ensuring a comfortable and timely return home.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CustomerTestimonialsSlider