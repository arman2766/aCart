import { Armchair, Cookie, ImageOff, ScanFace, SprayCan } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../utility/productApi";
import "./category.scss";

// Mapping category names to images
const categoryIcons = {
  beauty: <ScanFace />,
  fragrances: <SprayCan />,
  furniture: <Armchair />,
  groceries: <Cookie />,
  Furniture: "",
  Default: <ImageOff />,
};

export const Category = () => {
  const [products, setProducts] = useState([]);
  const [, setError] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedProducts = await fetchProduct();
        setProducts(fetchedProducts);
      } catch (err) {
        setError(err.message || "Failed to fetch products.");
      }
    };

    getCategories();
  }, []);

  // Extract unique categories
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="category-container">
      <h1 className="bg-red-500">Top Categories</h1>
      <div className="category-list">
        {uniqueCategories.map((categoryName, index) => {
          const IconComponent =
            categoryIcons[categoryName] || categoryIcons.Default;

          return (
            <div key={index} className="category-item">
              <span>
                {categoryName.toUpperCase()} {IconComponent}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
