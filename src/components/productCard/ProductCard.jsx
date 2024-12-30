import { useNavigate } from "react-router-dom";
import useProductData from "../../hooks/useProductData";
import CustomButton from "../customButton/CustomButton";
import ProductCardShimmer from "../loader/ProductCardShimmer";
import "./productCard.scss";

export const ProductCard = () => {
  const { data, loading, error } = useProductData();
  const navigate = useNavigate();

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
                    <p className="actual-price">
                      $ {Math.round(product.price)}
                    </p>

                    <p className="discount">
                      Discount {product.discountPercentage}%
                    </p>
                  </span>
                </div>
                <hr />
                <div className="price-add-to-cart-container">
                  <span className="price-container">
                    <p className="f-price">Final Price</p>
                    <p className="price">
                      $
                      {Math.round(
                        product.price -
                          (product.price * product.discountPercentage) / 100
                      )}
                    </p>
                  </span>
                  <CustomButton
                    text="View Details"
                    className="no-bg"
                    onClick={() => navigate(`/productInfo/${product.id}`)}
                  />
                  <CustomButton text="Add to Cart" />
                </div>
              </div>
            ))}
      </div>
    </>
  );
};