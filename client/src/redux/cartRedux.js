import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
      const indexToRemove = state.products.findIndex(
        (product) => product._id === action.payload.productId
      );
      if (indexToRemove !== -1) {
        const removedProduct = state.products[indexToRemove];
        state.quantity -= 1;
        state.total -= removedProduct.price;
        state.products.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
