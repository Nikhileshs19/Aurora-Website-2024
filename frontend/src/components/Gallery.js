import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Gallery.css';

import i1 from "../images/001.jpg";
import i2 from "../images/002.jpg";
import i3 from "../images/003.jpg";
import i4 from "../images/004.jpg";
import i5 from "../images/005.jpg";

import { Autoplay, Navigation } from 'swiper/modules';
import TitleStuff from './Title_Stuff';

function Gallery() {
  const images = [i1, i2, i3, i4, i5]
    return(
      <>
      <TitleStuff name="gallery" />
      <div className="w-full overflow-hidden">
          <Swiper
            className='mySwiper'
            modules={[Navigation, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-auto">
              <img 
                src={image} 
                className={`w-full h-auto m-auto rounded-3xl object-cover lg:p-32 p-4`}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </>
    )
}

export default Gallery