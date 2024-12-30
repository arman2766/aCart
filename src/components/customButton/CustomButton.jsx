import "./customButton.scss";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, onClick, type = "button", className, icon }) => {
  return (
    <button onClick={onClick} type={type} className={`${className} btn`}>
      <span className="btn-icon-text-container">
        {text && <span className="btn-text">{text}</span>}
        {icon && <span className="btn-icon">{icon}</span>}
      </span>
    </button>
  );
};

export default CustomButton;
