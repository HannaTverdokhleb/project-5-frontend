// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import css from './ReviewsSection.module.css';

//data to change from Back End API
const image = 'images/mobileImages/mainPage/avatar.jpg';

//Slide Detail Component
const SlideDetails = () =>{
    return (
        <div className={css.slideContainer}>
        <div className={css.slideAuthor}>
          <img className={css.picture} src={image} alt="Description" />
          <div className={css.authorDetails}>
            <h3>Olena Doe</h3>
            <div>★★★★★</div>
          </div>
        </div>
        <p className={css.mainText}>
          GooseTrack is impressive, the calendar view and filter options make
          it easy to stay organized and focused. Highly recommended.
        </p>
      </div>
    );
}

//Slider Component
export const ReviewsSlider = () => {
  const swiperParams = {
    modules: [Navigation, Pagination, Scrollbar, A11y],
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: true,
    breakpoints: {
      // when window width is >= 320px
      375: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,

      },
      // when window width is >= 1200px
      1440: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  };

  return (
    <Swiper {...swiperParams} className={css.container}>
      <SwiperSlide>
        <SlideDetails />
      </SwiperSlide>

      <SwiperSlide>
        <SlideDetails />
      </SwiperSlide>

      <SwiperSlide>
        <SlideDetails />
      </SwiperSlide>

      <SwiperSlide>
        <SlideDetails />
      </SwiperSlide>
    </Swiper>
  );
};


export const TitleH2 = () => {
  return (
    <h2 className={css.titleH2}>Reviews</h2>
  )
}
