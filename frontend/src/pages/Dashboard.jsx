 import { FaBoxOpen, FaShoppingCart, FaChartLine, FaRobot } from "react-icons/fa";
 import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Smart Cart Optimization Engine</p>

      <div className="cards">
        <div className="card">
          <h2><FaBoxOpen size={42} color="#2563EB" /></h2>
          <h3>Products</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h2><FaShoppingCart size={42} color="#16A34A" /></h2>
          <h3>Cart Items</h3>
          <p>24</p>
        </div>

        <div className="card">
          <h2><FaChartLine size={42} color="#F97316" /></h2>
          <h3>Analytics</h3>
          <p>85%</p>
        </div>

        <div className="card">
          <h2><FaRobot size={42} color="#9333EA" /></h2>
          <h3>Recommendations</h3>
          <p>18</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;