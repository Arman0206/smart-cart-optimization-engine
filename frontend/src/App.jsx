import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import ProductCatalog from "./pages/ProductCatalog";
import CartPage from "./pages/CartPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import RecommendationsPage from "./pages/RecommendationsPage";

function App() {
  const [cart, setCart] = useState([]);

  console.log({ cart, setCart });

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/products"
          element={
            <ProductCatalog
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
  path="/cart"
  element={
    <CartPage
      cart={cart}
      setCart={setCart}
    />
  }
/>

        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />

        <Route
          path="/recommendations"
          element={<RecommendationsPage />}
        />
      </Routes>
    </>
  );
}

export default App;