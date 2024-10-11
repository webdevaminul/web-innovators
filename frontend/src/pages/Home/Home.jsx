import Banner from "../../components/Banner/Banner";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import LatestBlogs from "../../components/LatestBlogs/LatestBlogs";
import Reviews from "../../components/Reviews/Reviews";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Heading from "../../utils/Heading";

export default function Home() {
  return (
    <>
    <Heading heading={"Home"} />
      <Banner />
      <CoursesSection />
      <LatestBlogs />
      <WhyChooseUs />
      <Reviews />
    </>
  );
}
