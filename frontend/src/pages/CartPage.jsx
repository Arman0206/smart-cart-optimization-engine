 function CartPage({ cart, setCart }) {
  console.log({ cart, setCart });
  const totalPrice = cart.reduce(
    (total, product) => total + Number(product.price),
    0
  );
const removeFromCart = (indexToRemove) => {
  setCart(cart.filter((_, index) => index !== indexToRemove));
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
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "30px",
    color: "#222",
  }}
>
  🛒 Shopping Cart
</h1>

      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                borderRadius: "16px",
                padding: "15px",
                marginBottom: "15px",
                backgroundColor: "white",
                transition:"0.3s"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "120px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div>
                <h3>{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <p>⭐ {product.rating}</p>
                <h3>₹{product.price}</h3>
                <button
  onClick={() => removeFromCart(index)}
  style={{
    backgroundColor: "#ef4444",
padding: "10px 18px",
fontWeight: "600",
  }}
>
  ❌ Remove
</button>
              </div>
            </div>
          ))}

          <hr />

          <div
  style={{
    marginTop: "30px",
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  }}
>
  <h2>Total Price: ₹{totalPrice}</h2>
</div>
        </>
      )}
    </div>
  );
}

export default CartPage;