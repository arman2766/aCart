import { Star, StarHalf, Star as StarOutline } from "lucide-react";

const StarRating = ({ rating }) => {
  // Array of stars with values for comparison
  const stars = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  // Function to determine which star icon to display
  const getStarIcon = (starValue) => {
    if (rating >= starValue) return <Star fill="#0a10bd" color="#0a10bd" />;
    if (rating > starValue - 1)
      return <StarHalf fill="#0a10bd" color="#0a10bd" />;
    return <StarOutline color="#0a10bd" />;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {stars.map((star, index) => (
        <span key={index}>{getStarIcon(star.value)}</span>
      ))}
      <span style={{ marginLeft: "8px", fontSize: "14px" }}>{rating}</span>
    </div>
  );
};

export default StarRating;
