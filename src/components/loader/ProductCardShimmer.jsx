import "./productCardShimmer.scss";

const ProductCardShimmer = () => {
  return (
    <div className="shimmer-loader">
      <div className="shimmer-loader__content">
        <div className="shimmer-loader__image"></div>
        <div className="shimmer-loader__details">
          <div className="shimmer-loader__title"></div>
          <div className="shimmer-loader__brand"></div>
          <div className="shimmer-loader__price-row">
            <div className="shimmer-loader__price"></div>
            <div className="shimmer-loader__discount"></div>
          </div>
        </div>
      </div>
      <div className="shimmer-loader__button"></div>
    </div>
  );
};

export default ProductCardShimmer;
