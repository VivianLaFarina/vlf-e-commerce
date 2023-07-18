import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [],
  isShowCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeIsShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },
  }, // initial state of the cart is an empty array
});

export const { changeIsShowCart } = cartSlice.actions;
export default cartSlice.reducer;
