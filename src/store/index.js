import { configureStore } from '@reduxjs/toolkit';
import userInfo from './slices/userInfo.slice';
import cart from './slices/cart.silce';

export default configureStore({
  reducer: {
    userInfo,
    cart,
  },
});
