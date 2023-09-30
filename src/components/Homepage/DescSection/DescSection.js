import React from 'react';
import css from './DescSection.module.css';

//1st block images
import imageMobile from 'images/mobileImages/mainPage/image1_mob@1x.png';
import imageMobile2x from 'images/mobileImages/mainPage/image1_mob@2x.png';
import imageTablet from 'images/tabletImages/mainPage/image1_tab@1x.png';
import imageTablet2x from 'images/tabletImages/mainPage/image1_tab@2x.png';
import imageDesktop from 'images/desktopImages/mainPage/image1_desk@1x.png';
import imageDesktop2x from 'images/desktopImages/mainPage/image1_desk@2x.png';

//2nd block images
import imageMobileTwo from 'images/mobileImages/mainPage/image2_mob@1x-1.png';
import imageMobileTwo2x from 'images/mobileImages/mainPage/image2_mob@2x-1.png';
import imageTabletTwo from 'images/tabletImages/mainPage/image2_tab@1x-1.png';
import imageTabletTwo2x from 'images/tabletImages/mainPage/image2_tab@2x-1.png';
import imageDesktopTwo from 'images/desktopImages/mainPage/image2_desk@1x-2.png';
import imageDesktopTwo2x from 'images/desktopImages/mainPage/image2_desk@2x-2.png';

//3rd block images
import imageMobileThree from 'images/mobileImages/mainPage/image3_mob@1x-2.png';
import imageMobileThree2x from 'images/mobileImages/mainPage/image3_mob@2x-2.png';
import imageTabletThree from 'images/tabletImages/mainPage/image3_tab@1x-2.png';
import imageTabletThree2x from 'images/tabletImages/mainPage/image3_tab@2x-2.png';
import imageDesktopThree from 'images/desktopImages/mainPage/image3_desk@1x-1.png';
import imageDesktopThree2x from 'images/desktopImages/mainPage/image3_desk@2x-1.png';

export const Description = () => {
  return (
    <div className={css.container}>
      {/* 1st block */}
      <div className={css.block}>
        <div className={css.blockText}>
          <h2 className={css.title}>
            <span className={css.titleDigit}>1.</span>
            <br />
            <span className={css.titleSelected}>Calendar</span>
            <br />
            View
          </h2>
          <p className={css.text}>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </p>
        </div>
        <picture>
          <source
            srcSet={`${imageDesktop} 1x, ${imageDesktop2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 604px"
          />

          <source
            srcSet={`${imageTablet} 1x, ${imageTablet2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 704px"
          />

          <source
            srcSet={`${imageMobile} 1x, ${imageMobile2x} 2x`}
            media="(max-width: 767px)"
            sizes="335px"
          />

          <img className={css.image} src={imageMobile} alt="calendar" />
        </picture>
      </div>

      {/* 2nd block */}
      <div className={css.blockTwo}>
        <div className={`${css.blockText} ${css.alignSelf}`}>
          <h2 className={css.title}>
            <div className={css.titleWrapper}>
              <span className={css.titleDigit}>2.</span>
            </div>
            <div className={css.titleWrapper}>
              <span className={`${css.titleSelectedTwo} ${css.sidebar}`}>
                Sidebar
              </span>
            </div>
          </h2>

          <p className={css.text}>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </p>
        </div>
        <picture>
          <source
            srcSet={`${imageDesktopTwo} 1x, ${imageDesktopTwo2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 604px"
          />

          <source
            srcSet={`${imageTabletTwo} 1x, ${imageTabletTwo2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 704px"
          />

          <source
            srcSet={`${imageMobileTwo} 1x, ${imageMobileTwo2x} 2x`}
            media="(max-width: 767px)"
            sizes="335px"
          />

          <img className={css.image} src={imageMobileTwo} alt="sidebar" />
        </picture>
      </div>

      {/* 3rd block */}
      <div className={css.block}>
        <div className={css.blockText}>
          <h2 className={css.title}>
            <span className={css.titleDigit}>3.</span>
            <br />
            <span className={css.titleSelected}>All in</span>
            <br />
            One
          </h2>
          <p className={css.text}>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </p>
        </div>
        <picture>
          <source
            srcSet={`${imageDesktopThree} 1x, ${imageDesktopThree2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 604px"
          />

          <source
            srcSet={`${imageTabletThree} 1x, ${imageTabletThree2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 704px"
          />

          <source
            srcSet={`${imageMobileThree} 1x, ${imageMobileThree2x} 2x`}
            media="(max-width: 767px)"
            sizes="335px"
          />

          <img className={css.image} src={imageMobileThree} alt="board" />
        </picture>
      </div>
    </div>
  );
};
