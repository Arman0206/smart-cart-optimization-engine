 import { Link } from "react-router-dom";
 function Dashboard() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🛒 Smart Cart Optimization Dashboard</h1>
      <p>Welcome to our Smart Cart Optimization System.</p>

      <hr />

    <div
     style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
         <Link
  to="/products"
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div
    style={{
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      width: "220px",
    }}
  >
          <h2>📦 Products</h2>
          <p>Manage all products.</p>
        </div>
        </Link>

<Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
 <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>🛍 Cart</h2>
          <p>View customer cart.</p>
        </div>
        </Link>

<Link to="/recommendations" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>⭐ Recommendations</h2>
          <p>AI suggested products.</p>
        </div>
        </Link>

<Link to="/analytics" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h2>📊 Analytics</h2>
          <p>View shopping analytics.</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;