import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}, // initial state of the cart is an empty array
});

export default cartSlice.reducer;
