import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import movie1 from "../../assets/SwiperImage/movie1.jfif";
import movie2 from "../../assets/SwiperImage/movie2.jfif";
import movie3 from "../../assets/SwiperImage/movie3.jfif";
import movie4 from "../../assets/SwiperImage/movie4.jfif";
import movie5 from "../../assets/SwiperImage/movie5.jfif";


const images = [movie1,movie2,movie3,movie4,movie5];


const HeaderSlider = ({ setHoverBg }) => {

    return (
        <section className="w-full px-8 py-4">

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >

                {images.map((image, index) => (
                    <SwiperSlide key={index} onMouseEnter={() => setHoverBg(image)} onMouseLeave={() => setHoverBg(null)}>

                        <img
                            src={image}
                            alt={`Movie ${index + 1}`}
                            className="w-full h-80 object-cover rounded-xl"

                        />

                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
};

export default HeaderSlider;