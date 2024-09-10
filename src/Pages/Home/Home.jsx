import { Link } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");

  const [query, setQuery] = useState("");
  
  const [products, setProducts] = useState([]);
  
  const categories = data?.products?.map(product => product?.category);
  const category = [...new Set(categories), 'all'];
  const filteredProducts = products?.filter((product) =>
    product?.brand?.toLowerCase().includes(query.toLowerCase())
  );

  const [selectCategory, setSelectCategory] = useState('all');

  const handleCategoryChange  = (e) => {
    setSelectCategory(e.target.value)
  }
  
  useEffect(() => {
    if(selectCategory === 'all'){
      setProducts(data.products)
    }else{
      const filterCat = data.products?.filter(product => product.category === selectCategory);
      setProducts(filterCat);
    }
  },[selectCategory,data])

  useEffect(() => {
    setProducts(data.products);
  }, [data]);

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.input}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Search products"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles.filter}>
          <label htmlFor="">Choose Category</label>
          <select name="" id="" onChange={handleCategoryChange}>
            {category.map(catg => <option key={catg} value={catg}>{catg}</option>)}
          </select>
        </div>
      </div>
      {loading && (
        <div className={styles.loading}>
          <h1>Loading....</h1>
        </div>
      )}
      <div className={styles.products}>
        {filteredProducts?.map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
