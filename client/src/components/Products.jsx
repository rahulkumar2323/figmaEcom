import { useEffect, useState, useContext } from "react";
import { TagSortContext } from "../context/TagSort";
import Product from "./Product";

export default function Products({ searchText }) {
  const { tag } = useContext(TagSortContext);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (searchText && searchText.trim() !== "") {
          const res = await fetch(`/api/products/search?q=${searchText}`);
          const data = await res.json();
          if (res.ok) {
            setProductData(data);
          }
        } else if (tag && tag.trim() !== "") {
          const res = await fetch(`/api/products?tag=${tag}`);
          const data = await res.json();
          if (res.ok) {
            setProductData(data);
          }
        } else {
          const res = await fetch(`/api/products`);
          const data = await res.json();
          if (res.ok) {
            setProductData(data);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, [tag, searchText]);
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-y-24 md:gap-y-16 sm:px-10 sm:py-28 py-16 px-8 gap-x-6">
      {productData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}
