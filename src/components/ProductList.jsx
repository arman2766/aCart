import useProductData from "../hooks/useProductData";
import { ProductCard } from "./productCard/ProductCard";

const ProductList = () => {
  const { data: products, loading, error } = useProductData();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ProductCard />
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
