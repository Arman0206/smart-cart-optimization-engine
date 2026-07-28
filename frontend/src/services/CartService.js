import { coreApi, DEMO_USER_ID } from "./apiClient";

const CartService = {
  getCart: async (userId = DEMO_USER_ID) => {
    const res = await coreApi.get("/cart", { params: { userId } });
    return res.data;
  },
  addToCart: async (productId, quantity = 1, userId = DEMO_USER_ID) => {
    const res = await coreApi.post("/cart", { userId, productId, quantity });
    return res.data;
  },
  removeFromCart: async (cartItemId) => {
    const res = await coreApi.delete(`/cart/${cartItemId}`);
    return res.data;
  },
};

export default CartService;