 import { useState } from "react";
 import laptopImg from "../assets/images/laptop.jpg";
import mouseImg from "../assets/images/mouse.avif";
import keyboardImg from "../assets/images/keyboard.avif";
import bagImg from "../assets/images/bag.avif";
import headphonesImg from "../assets/images/headphones.avif";
import ProductCard from "../components/products/ProductCard";
import monitorImg from "../assets/images/monitor.jpg";
const products = [
  {
    image: laptopImg,
    name: "Laptop",
    brand: "Dell",
    category: "Electronics",
    price: "60000",
    rating: "4.5",
  },
  {
    image: mouseImg,
    name: "Mouse",
    brand: "Logitech",
    category: "Electronics",
    price: "800",
    rating: "4.2",
  },
  {
    image: keyboardImg,
    name: "Keyboard",
    brand: "Logitech",
    category: "Electronics",
    price: "1500",
    rating: "4.4",
  },
  {
    image: bagImg,
    name: "Laptop Bag",
    brand: "HP",
    category: "Accessories",
    price: "1200",
    rating: "4.3",
  },
  {
    image: headphonesImg,
    name: "Headphones",
    brand: "Sony",
    category: "Electronics",
    price: "2500",
    rating: "4.6",
  },
  {
    image: monitorImg,
    name: "Monitor",
    brand: "Samsung",
    category: "Electronics",
    price: "12000",
    rating: "4.7",
  },
];
function ProductCatalog({ cart, setCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [brand, setBrand] = useState("All Brands");
  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All Categories" ||
    product.category === category;

  const matchesBrand =
    brand === "All Brands" ||
    product.brand === brand;

  return matchesSearch && matchesCategory && matchesBrand;
});
const addToCart = (product) => {
  console.log(product);
  setCart([...cart, product]);
};
 return (
  <div
  style={{
    padding: "30px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  }}
>
  <h1
  style={{
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "48px",
    color: "#222",
  }}
>
  🛍️ Product Catalog
</h1>
 <input
  type="text"
  placeholder="🔍 Search products..."
  value={search}
onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "300px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  }}
/>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  }}
>
  <option>All Categories</option>
  <option>Electronics</option>
  <option>Accessories</option>
</select>
<select
  value={brand}
  onChange={(e) => setBrand(e.target.value)}
  style={{
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  }}
>
  <option>All Brands</option>
  <option>Dell</option>
  <option>Logitech</option>
  <option>Samsung</option>
  <option>Sony</option>
  <option>HP</option>
</select>

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
    {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <ProductCard
      key={product.name}
      image={product.image}
      name={product.name}
      brand={product.brand}
      category={product.category}
      price={product.price}
      rating={product.rating}
      onAddToCart={()=>addToCart(product)}
    />
  ))
) : (
  <h2 style={{ width: "100%", textAlign: "center" }}>
    No products found.
  </h2>
)}
    </div>
  </div>
);
 }
 export default ProductCatalog;