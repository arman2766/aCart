import "./heroSection.scss";
const HeroSection = ({ title, icon, description }) => {
  return (
    <>
      <div className="hero-section-container">
        <div className="content">
          <span className="title-icon">
            {icon}
            <h1>{title}</h1>
          </span>

          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
