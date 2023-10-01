import { Description } from 'components/Homepage/DescSection/DescSection';
import { HeroSection } from 'components/Homepage/HeroSection/HeroSection';
import { ReviewsSlider, TitleH2 } from 'components/Homepage/ReviewsSection/ReviewsSection';


const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Description />
      <TitleH2/>
      <ReviewsSlider />
    </>
  );
};

export default Homepage;
