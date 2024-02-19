/** @format */

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   name: '',
   email: '',
   phone: '',
   address: '',
   avatar: '',
   access_token: '',
   id: '',
   isAdmin: false,
   dob: '',
   status: 1,
};

export const userSlide = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUser: (state, action) => {
         const {
            name = '',
            email = '',
            access_token = '',
            phone = '',
            address = '',
            avatar = '',
            _id = '',
            isAdmin,
            dob = '',
            status,
         } = action.payload;
         state.name = name ? name : state.name;
         state.email = email ? email : state.email;
         state.phone = phone ? phone : state.phone;
         state.address = address ? address : state.address;
         state.avatar = avatar ? avatar : state.avatar;
         state.access_token = access_token ? access_token : state.access_token;
         state.id = _id ? _id : state.id;
         state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
         state.dob = dob ? dob : state.dob;
         state.status = status ? status : state.status;
      },
      resetUser: (state) => {
         state.name = '';
         state.email = '';
         state.phone = '';
         state.address = '';
         state.avatar = '';
         state.access_token = '';
         state.id = '';
         state.isAdmin = false;
         state.dob = '';
         state.status = 1;
      },
   },
});

// Action creators are generated for each case reducer function
export const {updateUser, resetUser} = userSlide.actions;

export default userSlide.reducer;
