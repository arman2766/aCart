import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import SearchNotFound from "../../assets/images/png/empty-cart.png";
import { fetchProduct } from "../../utility/productApi";
import CustomButton from "../customButton/CustomButton";
import "./searchBar.scss";

// const searchData = [
//   {
//     name: "Fashion",
//     image:
//       "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Shirt",
//     image:
//       "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Jacket",
//     image:
//       "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Mobile",
//     image:
//       "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Laptop",
//     image:
//       "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "Home",
//     image:
//       "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
//   {
//     name: "book",
//     image:
//       "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
//     price: 100,
//     delivery: "Cash On Delivery",
//     review: "⭐⭐⭐⭐⭐",
//   },
// ];

export const SearchBar = () => {
  const [product, setProduct] = useState([]);
  const [, setError] = useState("");
  const [search, setSearch] = useState("");

  // const product_API_URL = "https://api.escuelajs.co/api/v1/products";

  // const fetchProduct = async () => {
  //   try {
  //     const response = await axios.get(product_API_URL);
  //     setProduct(response.data);
  //     //  response.data.forEach((product) => {
  //     //     console.log(product.category.name);
  //     //   });
  //   } catch (error) {
  //     setError("Failed to fetch products");
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProduct();
        setProduct(products);
      } catch (error) {
        setError(error.message);
      }
    };

    getProducts();
  }, []);

  // Modify the filter logic
  const filterSearchData = product.filter((obj) =>
    obj.title.toLowerCase().includes(search.toLowerCase().slice(0, 8))
  );

  return (
    <>
      <div className="searchbar">
        <span className="search-icon">
          <Search className="search-compass" />
        </span>
        <input
          type="search"
          placeholder="Try Shirt , Kurti or Search by Product Code"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <div className="searched-data-container">
            {filterSearchData.map((item, index) => {
              return (
                <div key={index} className="search-item">
                  <img src={item.images} alt={item.title} />
                  <div className="content">
                    <p className="name">{item.title}</p>

                    <p className="category">{item.category.toUpperCase()}</p>
                    <p className="review"> {item.review}</p>
                    <p className="price">₹ {item.price}</p>
                  </div>
                  <CustomButton
                    className="add-to-cart"
                    icon={<ShoppingBag size={"18px"} />}
                  />
                </div>
              );
            })}
            {!filterSearchData.length > 0 && (
              <div className="result-not-found">
                <img src={SearchNotFound} alt="search-not-found" />
                <p>Result not Found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
