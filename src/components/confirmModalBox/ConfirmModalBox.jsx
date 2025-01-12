import { CircleCheckBig, CircleX } from "lucide-react";
import CustomButton from "../customButton/CustomButton";
import "./confirmModalBox.scss";

const ConfirmModalBox = ({
  title,
  description,
  onClose,
  redirect,
  userName,
}) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="confirm-modal-box">
        <CircleX className="close-icon" onClick={onClose} />
        <div className="content">
          <CircleCheckBig className="success-icon" size={36} />
          <h1>
            {title}
            <p>
              {userName} {description}
            </p>
          </h1>
          <CustomButton text="OKAY" onClick={redirect} />
        </div>
      </div>
    </>
  );
};

export default ConfirmModalBox;
