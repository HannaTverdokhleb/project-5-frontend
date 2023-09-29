import React from 'react';
import { Link } from 'react-router-dom';
import css from './HeroSection.module.css';
import gooseImageDesktop from 'images/desktopImages/heroSection/heroGoose_desk@1x.png';
import gooseImageDesktop2x from 'images/desktopImages/heroSection/heroGoose_desk@2x.png';
import gooseImageTablet from 'images/tabletImages/heroSection/heroGoose_tab@1x.png';
import gooseImageTablet2x from 'images/tabletImages/heroSection/heroGoose_tab@2x.png';
import gooseImageMobile from 'images/mobileImages/heroSection/heroGoose_mob@1x.png';
import gooseImageMobile2x from 'images/mobileImages/heroSection/heroGoose_mob@2x.png';

export const HeroSection = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <picture>
          <source
            srcSet={`${gooseImageDesktop} 1x, ${gooseImageDesktop2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 150px"
          />

          <source
            srcSet={`${gooseImageTablet} 1x, ${gooseImageTablet2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 150px"
          />
          <source
            srcSet={`${gooseImageMobile} 1x, ${gooseImageMobile2x} 2x`}
            media="(max-width: 767px)"
            sizes="150px"
          />
          <img
            className={css.gooseImage}
            src={gooseImageMobile}
            alt="Goose"
            loading="lazy"
          />
        </picture>

        <h1 className={css.title}>
          G<span className={css.titleItalic}>oo</span>seTrack
        </h1>
        <nav className={css.contentButtons}>
          <Link to="/login" className={css.buttonWhite}>
            Log in
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M11.75 2.25006H12.65C13.9101 2.25006 14.5402 2.25006 15.0215 2.4953C15.4448 2.71101 15.789 3.05522 16.0048 3.47858C16.25 3.95988 16.25 4.58995 16.25 5.85006V12.1501C16.25 13.4102 16.25 14.0402 16.0048 14.5215C15.789 14.9449 15.4448 15.2891 15.0215 15.5048C14.5402 15.7501 13.9101 15.7501 12.65 15.7501H11.75M8 5.25006L11.75 9.00006M11.75 9.00006L8 12.7501M11.75 9.00006L2.75 9.00006"
                stroke="#3E85F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/register" className={css.textWhite}>
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
};
