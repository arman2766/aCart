import { Fullscreen } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProductData from "../../hooks/useProductData";
import QuickViewModal from "../../quickViewModal/QuickViewModal";
import CustomButton from "../customButton/CustomButton";
import ProductCardShimmer from "../loader/ProductCardShimmer";
import "./productCard.scss";

export const ProductCard = () => {
  const { data, loading, error } = useProductData();
  const [quickProductView, setQuickProductView] = useState(false);
  const navigate = useNavigate();

  const handleQuickProductView = () => {
    setQuickProductView((prev) => !prev);
  };

  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <>
      <h1 style={{ padding: "32px 64px" }}>Top Products</h1>

      <div className="product-card-container">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <ProductCardShimmer key={index} />
            ))
          : data.slice(0, 12).map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-title-container">
                  <span className="img">
                    <img src={product.thumbnail} width={"100px"} />
                  </span>
                  <span className="content-container">
                    <h3 className="title">{product.title}</h3>
                    <p className="band">
                      {product.brand ? product.brand : "Unavailable"}
                    </p>
                    <span className="price-container">
                      <p className="actual-price">
                        $ {Math.round(product.price)}
                      </p>
                      <p className="price">
                        Final Price $
                        {Math.round(
                          product.price -
                            (product.price * product.discountPercentage) / 100
                        )}
                      </p>
                    </span>
                    <p className="discount">
                      Discount {product.discountPercentage}%
                    </p>
                  </span>
                </div>
                <hr />
                <div className="price-add-to-cart-container">
                  <span className="view-details-quick-view-container">
                    <CustomButton
                      text="View Details"
                      className="no-bg"
                      onClick={() => navigate(`/productInfo/${product.id}`)}
                    />
                    <Fullscreen
                      onClick={handleQuickProductView}
                      className="quick-view"
                    />
                  </span>

                  <CustomButton text="Add to Cart" />
                </div>
              </div>
            ))}
      </div>
      {quickProductView && (
        <QuickViewModal handleQuickProductView={handleQuickProductView} />
      )}
    </>
  );
};
