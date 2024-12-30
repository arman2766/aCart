import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";
import HeroSection from "../../components/heroSection/HeroSection";
import { Layout } from "../../components/layout/Layout";
import { Loader } from "../../components/loader/Loader";
import StarRating from "../../components/starRating/StarRating";
import useProductData from "../../hooks/useProductData";
import "./productInfo.scss";

const ProductInfo = () => {
  const { id } = useParams();
  const { data: product, loading } = useProductData(id);

  console.log("first product", product);

  // State to track the current thumbnail
  const [currentThumbnail, setCurrentThumbnail] = useState(null);

  useEffect(() => {
    if (product?.thumbnail) {
      setCurrentThumbnail(product.thumbnail);
    }
  }, [product]);

  const handleThumbnailClick = (image) => {
    setCurrentThumbnail(image);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Layout>
        <HeroSection title={product?.title} />
        <div className="product-info-container">
          <div className="img-container">
            <img src={currentThumbnail} alt="Product Thumbnail" width="500px" />
            {product?.images?.length > 1 && (
              <div className="img-multiple">
                {product?.images?.map((image, i) => (
                  <img
                    src={image}
                    alt={`Product image ${i}`}
                    className={`single-img ${
                      currentThumbnail === image ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="content-container">
            <p className="title">{product?.title}</p>
            <p className="brand">{product?.brand}</p>
            <p className="rating">
              <StarRating rating={product?.rating} />
            </p>
            <p className="price">$ {product?.price}</p>
            <p className="des">{product?.description}</p>
            <p className="returnPolicy">{product?.returnPolicy}</p>
            <CustomButton text="Add to cart" className="btn-cart" />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductInfo;
