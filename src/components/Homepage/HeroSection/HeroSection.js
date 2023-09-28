import React from 'react';
import css from './HeroSection.module.css';
import gooseImageDesktop from 'images/desktopImages/heroSection/heroGoose_desk@1x.png';
import gooseImageDesktop2x from 'images/desktopImages/heroSection/heroGoose_desk@2x.png';
import gooseImageTablet from 'images/tabletImages/heroSection/heroGoose_tab@1x.png';
import gooseImageTablet2x from 'images/tabletImages/heroSection/heroGoose_tab@2x.png';
import gooseImageMobile from 'images/mobileImages/heroSection/heroGoose_mob@1x.png';
import gooseImageMobile2x from 'images/mobileImages/heroSection/heroGoose_mob@2x.png';
import arrowIcon from 'images/sprite.svg';

export const HeroSection = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <picture>
          <source
            srcset={`${gooseImageDesktop} 1x, ${gooseImageDesktop2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 150px"
          />

          <source
            srcset={`${gooseImageTablet} 1x, ${gooseImageTablet2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 150px"
          />
          <source
            srcset={`${gooseImageMobile} 1x, ${gooseImageMobile2x} 2x`}
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
          <a className={css.buttonWhite} href="/src/pages/Login.js">
            Log in
            <svg className={css.arrowIcon} width="13.5" height="13.5">
              <use xlinkHref={`${arrowIcon}#icon-arrow-right-link`} />
            </svg>
          </a>
          <a className={css.textWhite} href="/src/pages/Register.js">
            Sign Up
          </a>
        </nav>
      </div>
    </div>
  );
};
