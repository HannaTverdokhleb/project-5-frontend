import { Description } from 'components/Homepage/DescSection/DescSection';
import { HeroSection } from 'components/Homepage/HeroSection/HeroSection';
import { ReviewsSlider, TitleH2 } from 'components/Homepage/ReviewsSection/ReviewsSection';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';

const Homepage = () => {
  return (
    <>
    <StatisticsChart/>
      <HeroSection />
      <Description />
      <TitleH2/>
      <ReviewsSlider />
    </>
  );
};

export default Homepage;
