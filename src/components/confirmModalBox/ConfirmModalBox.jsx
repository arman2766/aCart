import { CircleCheckBig, CircleX } from "lucide-react";
import CustomButton from "../customButton/CustomButton";
import "./confirmModalBox.scss";

const ConfirmModalBox = ({ onClose, redirect, userName }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="confirm-modal-box">
        <CircleX className="close-icon" onClick={onClose} />
        <div className="content">
          <CircleCheckBig className="success-icon" size={36} />
          <h1>
            Sign-Up Successful!
            <p>{userName} account has been created. Welcome aboard!</p>
          </h1>
          <CustomButton text="OKAY" onClick={redirect} />
        </div>
      </div>
    </>
  );
};

export default ConfirmModalBox;
