import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function UmrahBlogCarousel() {
    return (
        <div className="bg-[#367C3D]">
            <div className="container mx-auto px-5 lg:px-10 overflow-hidden">
                <div className="mt-6 lg:mt-20 mb-6 lg:mb-20 blog-Section">
                    <h2 className="blogs">OUR bLOGS</h2>
                    <div className="lg:flex justify-between">
                        <div>
                            <h2 className="mt-5 Explore-us">Explore Our Article</h2>
                            <h3 className="mt-3 read-more">Read about Umrah</h3>
                        </div>
                        <div>
                            <p className="blog-content mt-4 lg:mt-2 mb-4 lg:mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
                                nulla ac eros porttitor pharetra.
                            </p>
                        </div>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        loop={true}
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2, spaceBetween: 30 },
                            1300: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="mySwiper mt-[30px] lg:mt-20"
                    >
                        {[1, 2, 3, 4].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="card1">
                                    <div className="card-content p-5 lg:p-10">
                                        <h2 className="mt-2">Custom Property for You</h2>
                                        <p className="mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                            gravida nulla ac eros porttitor.
                                        </p>
                                        <div className="card-image mt-8">
                                            <img
                                                src="assets/images/makkah.jpg"
                                                className="h-auto max-w-full Custom-img mt-3"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center align-center mt-4">
                        {/* Swiper injects pagination here automatically */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UmrahBlogCarousel;
