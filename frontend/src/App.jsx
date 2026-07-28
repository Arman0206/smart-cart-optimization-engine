
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ProductCatalog from "./pages/ProductCatalog";
import CartPage from "./pages/CartPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import RecommendationsPage from "./pages/RecommendationsPage";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "60px", margin: 0 }}>404</h1>
      <p style={{ color: "#6b7280", marginTop: "10px" }}>
        We couldn't find that page.
      </p>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;