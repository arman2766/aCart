import { ShoppingBagIcon } from "lucide-react";
import HeroSection from "../../components/heroSection/HeroSection";
import { Layout } from "../../components/layout/Layout";
import { ProductCard } from "../../components/productCard/ProductCard";

const Shop = () => {
  return (
    <div>
      <Layout>
        <HeroSection
          title="SHOP"
          description=" Experience the joy of shopping with our unparalleled fashion
            collection, featuring the latest trends, beauty, and lifestyle
            products."
          icon={<ShoppingBagIcon color="#fff" size={"50px"} />}
        />
        <div className="shop-container">
          <div className="sidebar-container">Sidebar</div>
          <div className="product-container">
            <ProductCard />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Shop;
