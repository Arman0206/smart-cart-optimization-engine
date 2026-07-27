import RecommendationCard from "./RecommendationCard";

const recommendationMap = {
  Laptop: [
    {
      id: 101,
      name: "Wireless Mouse",
      price: 999,
      reason: "Frequently Bought Together",
    },
    {
      id: 102,
      name: "Laptop Bag",
      price: 1499,
      reason: "Protect your laptop while travelling",
    },
    {
      id: 103,
      name: "Mechanical Keyboard",
      price: 1999,
      reason: "Improves productivity",
    },
    {
      id: 104,
      name: "Laptop Stand",
      price: 899,
      reason: "Better posture & cooling",
    },
  ],

  Mobile: [
    {
      id: 201,
      name: "Phone Case",
      price: 499,
      reason: "Protect your phone",
    },
    {
      id: 202,
      name: "Fast Charger",
      price: 899,
      reason: "Recommended accessory",
    },
    {
      id: 203,
      name: "Power Bank",
      price: 1499,
      reason: "Most customers buy together",
    },
  ],
};

function RecommendationList({ cartItems, onAdd }) {
  let recommendations = [];

  cartItems.forEach((item) => {
    if (recommendationMap[item.name]) {
      recommendations.push(...recommendationMap[item.name]);
    }
  });

  recommendations = recommendations.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>💡 Frequently Bought Together</h2>

      {recommendations.map((product) => (
        <RecommendationCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default RecommendationList;