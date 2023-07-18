import { createSlice } from '@reduxjs/toolkit';
import { axiosEcommerce } from '../../utils/configAxios';

const initialState = {
  token: '',
  user: null, // string | number (user id) or undefined if not logged
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: JSON.parse(localStorage.getItem('userInfo')) ?? initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const newState = { ...state, ...action.payload };
      localStorage.setItem('userInfo', JSON.stringify(newState));
      return newState;
    },
    logOutUser: (state) => {
      const newState = { ...state, ...initialState };
      localStorage.setItem('userInfo', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setUserInfo, logOutUser } = userInfoSlice.actions;

export const loginUser = (data) => (dispatch) => {
  axiosEcommerce
    .post('users/login', data)
    .then((res) => dispatch(setUserInfo(res.data)))
    .catch((err) => console.log(err));
};

export default userInfoSlice.reducer;
