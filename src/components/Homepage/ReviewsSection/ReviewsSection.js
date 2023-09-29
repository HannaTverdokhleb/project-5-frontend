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
        <p>
          GooseTrack is impressive, the calendar view and filter options make
          it easy to stay organized and focused. Highly recommended.
        </p>
      </div>
    );
}

//Slider Component
export const ReviewsSlider = () => {
  return (
    <Swiper
      className={css.container}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <SlideDetails/>
      </SwiperSlide>
      
      <SwiperSlide>
        <SlideDetails/>
      </SwiperSlide>

      <SwiperSlide>
        <SlideDetails/>
      </SwiperSlide>

      <SwiperSlide>
        <SlideDetails/>
      </SwiperSlide>
      
    </Swiper>
  );
};
