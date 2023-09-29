import { Description } from 'components/Homepage/DescSection/DescSection';
import { HeroSection } from 'components/Homepage/HeroSection/HeroSection';
import { ReviewsSlider } from 'components/Homepage/ReviewsSection/ReviewsSection';


const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Description />
      <ReviewsSlider />
    </>
  );
};

export default Homepage;
