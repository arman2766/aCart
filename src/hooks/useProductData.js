import { useEffect, useState } from "react";
import { fetchAllProducts, fetchProductById } from "../utility/api";

const useProductData = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("productid", id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const result = await fetchProductById(id);
          setData(result);
          console.log("Single product fetched:", result);
        } else {
          const result = await fetchAllProducts();
          setData(result.products);
          console.log("All products fetched:", result.products);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return { data, loading, error };
};

export default useProductData;
