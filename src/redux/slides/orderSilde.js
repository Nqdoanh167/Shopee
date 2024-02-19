/** @format */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   orderItems: [],
};

export const orderSlide = createSlice({
   name: 'order',
   initialState,
   reducers: {
      addOrder: (state, action) => {
         const {orderAdds} = action.payload;
         state.orderItems = orderAdds;
      },
      removeProductsFromOrder: (state, action) => {
         const idsProduct = action.payload;
         const products = state?.orderItems.filter((item) => !idsProduct.includes(item?.product_id));
         state.orderItems = products;
      },
      resetOrder: (state, action) => {
         state.orderItems = [];
      },
   },
});

// Action creators are generated for each case reducer function
export const {addOrder, resetOrder, removeProductsFromOrder} = orderSlide.actions;

export default orderSlide.reducer;
