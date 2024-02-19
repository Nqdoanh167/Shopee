/** @format */

import axios from 'axios';

export const createOrder = async (data, userId, access_token) => {
   const res = await axios.post(`http://localhost:8080/api/order/${userId}`, data, {
      headers: {
         Authorization: `Bearer ${access_token}`,
      },
   });
   return res;
};
