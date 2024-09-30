import Banner from "../../components/Banner/Banner";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import DiscountedSection from "../../components/DiscountedSection/DiscountedSection";
import Reviews from "../../components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Banner />
      <CoursesSection />
      <DiscountedSection />
      <Reviews />
    </>
  );
}
