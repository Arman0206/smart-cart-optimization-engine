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
          textAlign: "center",
          marginBottom: "30px",
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
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
                backgroundColor: "white",
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
    marginTop: "10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  ❌ Remove
</button>
              </div>
            </div>
          ))}

          <hr />

          <h2>Total Price: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;