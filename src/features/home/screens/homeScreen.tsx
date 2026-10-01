import HomeCategories from "../components/HomeCategories";
import HomeSlider from "../components/HomeSlider";
import FeaturedProducts from "../components/featuredProducts";

export default function homeScreen() {
  return (
    <>
      <HomeSlider />
      <HomeCategories />
      <FeaturedProducts />
    </>
  );
}
