/** @format */

import axios from 'axios';

export const getAllProduct = async (filter) => {
   if (filter) {
      const res = await axios.get(`http://localhost:8080/api/product/get-all${filter}`);
      return res;
   }
   const res = await axios.get(`http://localhost:8080/api/product/get-all`);
   return res;
};
export const getDetailProduct = async (id) => {
   const res = await axios.get(`http://localhost:8080/api/product/get-detail/${id}`);
   return res;
};
export const getAllCategory = async (id) => {
   const res = await axios.get(`http://localhost:8080/api/product/get-all-category`);
   return res;
};
