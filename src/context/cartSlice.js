import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || []
  },
  reducers: {
    inCart: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decCart: (state, action) => {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index >= 0) {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        );
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    removeCart: (state, action) => {
      state.value = state.value.filter(el => el.id !== action.payload.id)
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeAllCart: (state) => {
      state.value = []
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { inCart, decCart, removeAllCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
