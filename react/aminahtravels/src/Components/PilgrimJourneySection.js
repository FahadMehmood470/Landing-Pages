import React from 'react'

function PilgrimJourneySection() {
    return (
        <div class="container mx-auto overflow-hidden ">
            <div class="grid px-5 lg:px-10 md:grid-cols-12 xl:grid-cols-12 gap-8 mt-5 lg:mt-20 mb-5 lg:mb-20">
                <div class="content-container order-1 xl:order-2 col-span-12 lg:col-span-5">
                    <h2 class="order-1 mt-5">Our Pilgrims Journey?</h2>
                    <h3 class="order-2 mt-1 lg:mt-3">Interested in Watching</h3>
                    <p class="order-3 mt-5">Don’t worry to ask and consult your plan with us! Your input is very
                        valuable
                        for us</p>
                    <a class="order-5 mt-4 lg:mt-5 button-display-block" href="">Enquire Now</a>
                </div>
                <div class="vadio-container order-4 xl:order-1 col-span-12 lg:col-span-7">
                    <iframe src="https://www.youtube.com/embed/z4OkHqu1KsA" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy" allowfullscreen></iframe>
                </div>
                <a class="order-5 mt-2 mb-4 lg:mt-5 enquire-now-btn  button-display-none col-span-12 " href="">Enquire
                    Now</a>
            </div>
        </div>
    )
}

export default PilgrimJourneySection