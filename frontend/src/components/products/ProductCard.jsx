function ProductCard({ image, name, brand, category, price, rating, onAddToCart, }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "240px",
        backgroundColor: "white",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />

      <h3>{name}</h3>

      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p>⭐ {rating}</p>

      <button
      onClick={onAddToCart}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;