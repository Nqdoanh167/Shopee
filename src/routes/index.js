/** @format */

import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

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
      path: '*',
      page: NotFoundPage,
   },
];
