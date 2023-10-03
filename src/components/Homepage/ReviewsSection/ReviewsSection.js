// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useEffect, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import css from './ReviewsSection.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/reviews/reviewsSelectors';
import { fetchReviews } from 'redux/reviews/reviewsOperations';

//data to change from Back End API
const image = 'images/mobileImages/mainPage/avatar.jpg';

const SlideDetails = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectContacts);
  console.log(reviews)

  const [state, setState] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  const { name, rating, comment } = state;

  useEffect(() => {
    // Fetch reviews when the component mounts
    dispatch(fetchReviews())
      .then(response => response.json())
      .then(result => {
        const { name, rating, comment } = result; // Update this line to match your API response structure
        setState({ name, rating, comment });
      })
      .catch(error => {
        dispatch(fetchReviews(error));
      });
  }, [dispatch]);

  return (
    <div className={css.slideContainer}>
      <div className={css.slideAuthor}>
        <img className={css.picture} src={image} alt="Description" />
        <div className={css.authorDetails}>
          <h3>{name}</h3>
          <div>{rating}</div>
        </div>
        <p className={css.mainText}>{comment}</p>
      </div>
    </div>
  );
};

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
  return <h2 className={css.titleH2}>Reviews</h2>;
};
