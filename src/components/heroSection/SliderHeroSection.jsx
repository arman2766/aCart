import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Banner1 from "../../assets/images/png/Banner1.png";
import Banner2 from "../../assets/images/png/Banner2.png";
import Banner3 from "../../assets/images/png/Banner3.png";
import "./sliderHeroSection.scss";
const SliderHeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Discover Your Favorites Today",
      description:
        "Shop the latest trends in fashion, tech, and home essentials.",
      image: Banner1,
    },
    {
      id: 2,
      title: "Big Savings, Endless Choices",
      description: "Unbeatable deals on everything you love, all in one place.",
      image: Banner2,
    },
    {
      id: 3,
      title: "Your One-Stop Online Shop",
      description: "Find what you need, when you need it, with ease.",
      image: Banner3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-slider">
      {/* Slider Section */}
      <div
        className={`slide`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="content">
          <h1 className="bg-slate-400">{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>
        </div>
        {/* <Button text="Hello" /> */}
        <button className="prev-button" onClick={goToPrevious}>
          <ChevronLeft />
        </button>
        <button className="next-button" onClick={goToNext}>
          <ChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderHeroSection;
