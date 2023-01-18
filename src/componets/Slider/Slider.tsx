import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './Slider.scss';

function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
            <div className="swiper__img-box">
                <img className="swiper__img" src="https://www.trcgalaktika.ru/admin/upload/shop-actions/shop-action-656/thumb-5e16f6edba2c3.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img-box">
                <img className="swiper__img" src="https://www.trcgalaktika.ru/admin/upload/shop-actions/shop-action-656/thumb-5e16f6edba2c3.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="swiper__img-box">
                <img className="swiper__img" src="https://www.trcgalaktika.ru/admin/upload/shop-actions/shop-action-656/thumb-5e16f6edba2c3.png" alt="" />
            </div>
        </SwiperSlide>
        </Swiper>
    )
}

export default Slider;