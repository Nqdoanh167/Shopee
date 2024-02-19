/** @format */

export const convertPrice = (price) => {
   try {
      const result = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `đ${result}`;
   } catch (error) {
      return null;
   }
};
