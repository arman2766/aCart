import { CircleX } from "lucide-react";
import CustomButton from "../components/customButton/CustomButton";
import useProductData from "../hooks/useProductData";
import "./quickViewModal.scss";

const QuickViewModal = ({ handleQuickProductView }) => {
  const { data } = useProductData();
  console.log("Product data loaded", data);
  return (
    <>
      <div className="overlay"></div>
      <div className="quick-view-modal-container">
        <button className="close-modal-btn" onClick={handleQuickProductView}>
          <CircleX />
        </button>
        <div className="quick-view-modal-content">
          <div className="img">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
              alt=""
            />
          </div>
          <div className="content">
            <h1>Essence Mascara Lash Princess</h1>
            <p>
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
            </p>
            <CustomButton text="Add to cart"></CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickViewModal;
