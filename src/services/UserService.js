/** @format */
import axios from 'axios';
export const registerUser = async (data) => {
   const res = await axios.post(`http://localhost:8080/api/user`, data);
   return res.data;
};
export const loginUser = async (data) => {
   const res = await axios.post(`http://localhost:8080/api/user/login`, data);
   return res.data;
};
export const getDetailUser = async ({id, access_token}) => {
   const res = await axios.get(`http://localhost:8080/api/user/get-detail/${id}`, {
      headers: {
         Authorization: `Bearer ${access_token}`,
      },
   });
   return res.data;
};
export const updateUser = async ({id, access_token, data}) => {
   const res = await axios.put(`http://localhost:8080/api/user/update/${id}`, data, {
      headers: {
         'Content-Type': 'multipart/form-data',
         Authorization: `Bearer ${access_token}`,
      },
   });
   return res.data;
};
