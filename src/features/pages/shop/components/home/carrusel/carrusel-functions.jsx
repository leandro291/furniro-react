import React from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function CarruselFunctions({ slides }) {

    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={reduceMotion ? false : { delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
            className="w-full h-full"
        >
            {
                slides.map(({ id, image, title}) => (
                    <SwiperSlide key={id} className="relative ">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="absolute bottom-10 left-6 bg-white/70 backdrop-blur-md p-6 min-w-50">
                                <p className="text-gray-600 text-sm">0{id} — Room</p>
                                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}