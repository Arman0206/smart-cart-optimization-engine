import { FaStar, FaRobot, FaShoppingCart } from "react-icons/fa";

const recommendations = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "₹2,499",
    rating: 4.8,
    reason: "Based on your recent purchases",
  },
  {
    name: "Gaming Mouse",
    category: "Accessories",
    price: "₹999",
    rating: 4.6,
    reason: "Frequently bought together",
  },
  {
    name: "Smart Watch",
    category: "Wearables",
    price: "₹3,999",
    rating: 4.7,
    reason: "Trending this week",
  },
  {
    name: "Bluetooth Speaker",
    category: "Audio",
    price: "₹1,799",
    rating: 4.5,
    reason: "AI Recommended",
  },
];

function RecommendationsPage() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          padding: "30px",
          borderRadius: "18px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ margin: 0 }}> AI Recommendations</h1>
        <p style={{ marginTop: "10px" }}>
          Personalized products selected by the Smart Cart Optimization Engine.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "20px",
        }}
      >
        {recommendations.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "#eef4ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                marginBottom: "15px",
              }}
            >
              📦
            </div>

            <h2 style={{ margin: "5px 0" }}>{item.name}</h2>

            <p style={{ color: "#666" }}>{item.category}</p>

            <p style={{ fontWeight: "bold", color: "#2563eb" }}>
              {item.price}
            </p>

            <p>
              <FaStar color="#fbbf24" /> {item.rating}
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#eef4ff",
                color: "#2563eb",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                margin: "10px 0",
              }}
            >
              <FaRobot />
              {item.reason}
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "15px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPage;