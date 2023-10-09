// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import css from './ReviewsSection.module.css';
import imageDummy from 'images/mobileImages/mainPage/avatar.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from 'redux/reviews/reviewsOperations';
import { selectReviews } from 'redux/reviews/reviewsSelectors';

export const StarRating = ({ rating }) => {
  // Ensure that the rating is within the range of 1 to 5
  const sanitizedRating = Math.min(Math.max(rating, 1), 5);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < sanitizedRating;
      stars.push(
        <span
          key={i}
          className={`star ${isFilled ? 'star-filled' : 'star-empty'}`}
        ></span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};


const SlideDetails = ({ image, name, rating, comment }) => {
  // Stars

  return (
    <div className={css.slideContainer}>
      <div className={css.slideAuthor}>
        <img className={css.picture} src={image} alt="Description" />
        <div className={css.authorDetails}>
          <h3>{name}</h3>
          <div>{rating}</div>
          <div><StarRating rating={rating} /></div> 
          <p className={css.mainText}>{comment}</p>
        </div>
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

  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <>
      {reviews.length > 0 && (
        <Swiper {...swiperParams} className={css.container}>
          {reviews.map(({ _id, comment, rating, owner }) => {
            const name = owner && owner.name ? owner.name : 'Unknown';
            const avatar =
              owner && owner.avatarURL ? owner.avatarURL : imageDummy;
            return (
              <SwiperSlide key={_id}>
                <SlideDetails
                  comment={comment}
                  rating={<StarRating/>}
                  name={name}
                  image={avatar}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export const TitleH2 = () => {
  return <h2 className={css.titleH2}>Reviews</h2>;
};
