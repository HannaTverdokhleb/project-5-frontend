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

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const rateIcon = (
  <path d="M791.706 1024c-12.164 0-24.269-3.906-34.692-11.681l-245.007-183.662-245.007 183.662c-10.151 7.636-22.35 11.717-34.855 11.674s-24.677-4.22-34.777-11.922c-10.109-7.665-17.65-18.461-21.549-30.866-3.899-12.398-3.956-25.768-0.166-38.21l91.377-308.266-242.807-178.847c-10.063-7.763-17.536-18.636-21.363-31.082s-3.813-25.835 0.039-38.272c3.883-12.407 11.397-23.225 21.482-30.925s22.229-11.892 34.717-11.984l300.724-0.473 95.743-300.619c3.951-12.384 11.53-23.155 21.662-30.787s22.304-11.739 34.793-11.739c12.489 0 24.662 4.107 34.794 11.739s17.71 18.403 21.661 30.787l94.117 300.619 302.263 0.473c12.5 0.074 24.664 4.263 34.757 11.975s17.605 18.552 21.475 30.982c3.862 12.429 3.884 25.816 0.051 38.257-3.825 12.442-11.308 23.306-21.38 31.049l-242.805 178.847 91.37 308.266c3.803 12.434 3.752 25.805-0.139 38.21-3.899 12.398-11.432 23.201-21.541 30.866-10.13 7.768-22.374 11.944-34.94 11.93v0z"></path>
);

const rateStyled = {
  itemShapes: rateIcon,
  activeFillColor: '#FFAC33',
  inactiveFillColor: '#CEC9C1',
};

const SlideDetails = ({ image, name, rating, comment }) => {

  return (
    <div className={css.slideContainer}>
      <div className={css.slideAuthor}>
        <img className={css.picture} src={image} alt="Description" width="50" height="50" />
        <div className={css.authorDetails}>
          <h3>{name}</h3>
          <div>
            <Rating
              name="rating"
              component="input"
              value={rating}
              itemStyles={rateStyled}
              readOnly={true}
              style={{ maxWidth: 90, gap: 4, marginBottom: '24px' }}
            />
          </div>
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
    // loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    initialSlide: 3,
    navigation: {nextEl: ".arrowLeft", prevEl: ".arrowRight" },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: false,
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
                  rating={rating}
                  name={name}
                  image={avatar}
                />
              </SwiperSlide>
            );
          })}
          <div className={css.swipperArrows}>
            <svg className="arrowLeft" xmlns="http://www.w3.org/2000/svg" width="62" height="61" viewBox="0 0 62 61" fill="none">
              <path d="M15.1847 32.5346L12.8917 30.9754L56.5 30.9742V29.7542L13.165 29.7554L15.325 28.514L14.7174 27.4563L9.74654 30.3123L14.4984 33.5435L15.1847 32.5346Z" fill="#111111"/>
            </svg>
            <svg className="arrowRight" xmlns="http://www.w3.org/2000/svg" width="62" height="61" viewBox="0 0 62 61" fill="none">
              <g clipPath="url(#clip0_182_6197)">
                <path d="M41.8153 28.1937L44.1083 29.7529L0.5 29.7541L0.5 30.9741L43.835 30.9729L41.675 32.2142L42.2826 33.272L47.2535 30.416L42.5016 27.1848L41.8153 28.1937Z" fill="#111111"/>
              </g>
              <defs>
                <rect width="61" height="61" fill="white" transform="matrix(0 -1 1 0 0.5 61)"/>
              </defs>
            </svg>
          </div>
        </Swiper>
      )}
    </>
  );
};

export const TitleH2 = () => {
  return <h2 className={css.titleH2}>Reviews</h2>;
};
