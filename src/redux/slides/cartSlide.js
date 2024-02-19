/** @format */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   cartItems: [],
};

export const cartSlide = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addCart: (state, action) => {
         const {ItemAdd} = action.payload;
         const itemCart = state?.cartItems?.find((item) => item?.product_id === ItemAdd.product_id);
         if (itemCart) {
            if (itemCart?.amount + ItemAdd?.amount <= itemCart?.countInstock) {
               itemCart.amount += ItemAdd?.amount;
            }
         } else {
            state.cartItems.push(ItemAdd);
         }
      },
      removeCart: (state, action) => {
         const idProduct = action.payload;
         const products = state?.cartItems.filter((item) => item?.product_id !== idProduct);
         state.cartItems = products;
      },
      increaseAmount: (state, action) => {
         const idProduct = action.payload;
         const itemCart = state?.cartItems?.find((item) => item?.product_id === idProduct);
         if (itemCart) itemCart.amount++;
      },
      decreaseAmount: (state, action) => {
         const idProduct = action.payload;
         const itemCart = state?.cartItems?.find((item) => item?.product_id === idProduct);
         if (itemCart) itemCart.amount--;
      },
      removeProductsFromCart: (state, action) => {
         const idsProduct = action.payload;
         const products = state?.cartItems.filter((item) => !idsProduct.includes(item?.product_id));
         state.cartItems = products;
      },
      resetCart: (state, action) => {
         state.cartItems = [];
      },
   },
});

// Action creators are generated for each case reducer function
export const {addCart, removeCart, increaseAmount, decreaseAmount, resetCart, removeProductsFromCart} =
   cartSlide.actions;

export default cartSlide.reducer;
