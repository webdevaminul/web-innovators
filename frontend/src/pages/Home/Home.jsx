import Banner from "../../components/Banner/Banner";
import DiscountedSection from "../../components/DiscountedSection/DiscountedSection";
import Reviews from "../../components/Reviews/Reviews";
import Heading from "../../utils/Heading";

export default function Home() {
  return (
    <>
    <Heading heading={"Home"} />
      <Banner />
      <DiscountedSection />
      <Reviews />
    </>
  );
}
