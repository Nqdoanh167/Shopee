/** @format */

import CartPage from '../pages/CartPage/CartPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SearchPage from '../pages/SearchPage/SearchPage';

export const routes = [
   {
      path: '/',
      page: HomePage,
      isShowHeader: true,
   },
   {
      path: '/login',
      page: LoginPage,
      isShowHeader: false,
   },
   {
      path: '/register',
      page: RegisterPage,
      isShowHeader: false,
   },
   {
      path: '/product-detail/:id',
      page: ProductDetailPage,
      isShowHeader: true,
   },
   {
      path: '/cart',
      page: CartPage,
      isShowHeader: true,
   },
   {
      path: '/checkout',
      page: CheckoutPage,
      isShowHeader: true,
   },
   {
      path: '/user/account/profile',
      page: ProfilePage,
      isShowHeader: true,
   },
   {
      path: '/search',
      page: SearchPage,
      isShowHeader: true,
   },
   {
      path: '*',
      page: NotFoundPage,
   },
];
