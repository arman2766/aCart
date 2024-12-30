import { Category } from "../../components/category/Category";
import SliderHeroSection from "../../components/heroSection/SliderHeroSection";
import { Layout } from "../../components/layout/Layout";
import { ProductCard } from "../../components/productCard/ProductCard";

const Home = () => {
  return (
    <div>
      <Layout>
        <SliderHeroSection />
        <Category />
        <ProductCard />
      </Layout>
    </div>
  );
};

export default Home;
