/** @format */

import React, {useState} from 'react';
import styles from './headerComponent.module.scss';
import {ShoppingCartOutlined} from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import {SearchOutlined} from '@ant-design/icons';
import ButtonIconComponent from '../ButtonIconComponent/ButtonIconComponent';
import {Logo, Store, UserIcon} from '../../svg';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Badge, Dropdown, Popover} from 'antd';
import {resetUser} from '../../redux/slides/userSlide';
import LoadingComponent from '../LoadingComponent/Loading';
import * as ProductService from '../../services/ProductService';
import {useQuery} from 'react-query';
export default function HeaderComponent() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const [isLoading, setIsLoading] = useState(false);
   const [items, setItems] = useState([
      {
         key: 0,
         label: (
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
               <Store />
               <span>{`Tìm shop `}</span>
            </div>
         ),
      },
   ]);
   const handleLogout = () => {
      setIsLoading(true);
      dispatch(resetUser());
      setIsLoading(false);
   };
   const handleClickNavigate = (type) => {
      if (type === 'register') {
         navigate('/register');
      } else if (type === 'login') {
         navigate('/login');
      } else if (type === 'user/account/profile') {
         navigate('/user/account/profile');
      } else if (type === 'home') {
         navigate('/');
      } else {
         handleLogout();
      }
   };
   const cart = useSelector((state) => state.cart);
   const content = (
      <div className={styles.popup}>
         <p onClick={() => handleClickNavigate('user/account/profile')}>Tài khoản của tôi</p>
         <p>Đơn mua</p>
         <p onClick={() => handleClickNavigate()}>Đăng xuất</p>
      </div>
   );
   const getAllCategory = async () => {
      const res = await ProductService.getAllCategory();
      return res?.data?.data;
   };
   const {isLoading: isLoadingCategory, data: allCategorys} = useQuery(['allCategorys'], getAllCategory);
   const handleSearch = (e) => {
      const listItems = allCategorys.filter((item) => item.toLowerCase().startsWith(e.target.value));
      const list = listItems.map((item, index) => {
         return {
            key: index + 1,
            label: <span onClick={() => navigate(`/search?filter=${item}`)}>{item}</span>,
         };
      });
      list.unshift({
         key: -1,
         label: (
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
               <Store fill='#ee4d2d' />
               <span>{`Tìm shop ${e.target.value}`}</span>
            </div>
         ),
      });
      setItems(list);
   };

   return (
      <div className={styles.headerWrap}>
         <div className={styles.header}>
            <div className={styles.navbar}>
               <div className={styles.navbar_left}>
                  <span>Kênh người bán</span>
                  <span>Trở thành người bán</span>
                  <span>Tải ứng dụng</span>
                  <span>Kết nối</span>
               </div>
               <div className={styles.navbar_right}>
                  <span>Thông báo</span>
                  <span>Hỗ trợ</span>
                  <span>Tiếng việt</span>
                  <LoadingComponent isLoading={isLoading}>
                     <div className={styles.user}>
                        {user?.access_token ? (
                           <Popover content={content} className={styles.userLogin}>
                              <div className={styles.wrapUserIcon}>
                                 {user?.avatar ? (
                                    <img
                                       src={`http://localhost:8080/${user?.avatar}`}
                                       alt='avatar'
                                       style={{
                                          objectFit: 'contain',
                                          width: '100%',
                                       }}
                                    />
                                 ) : (
                                    <UserIcon
                                       style={{
                                          fontSize: '20px',
                                          stroke: '#c6c6c6',
                                          position: 'absolute',
                                          top: '50%',
                                          left: '50%',
                                          transform: 'translate(-50%,-50%)',
                                       }}
                                    />
                                 )}
                              </div>

                              <span>{user?.name}</span>
                           </Popover>
                        ) : (
                           <div className={styles.userNotLogin}>
                              <span onClick={() => handleClickNavigate('register')}>Đăng ký</span>
                              <span onClick={() => handleClickNavigate('login')}>Đăng nhập</span>
                           </div>
                        )}
                     </div>
                  </LoadingComponent>
               </div>
            </div>
            <div className={styles.header_container}>
               <Logo
                  style={{
                     fill: '#fff',
                     width: '162px',
                     height: '50px',
                     cursor: 'pointer',
                  }}
                  onClick={() => handleClickNavigate('home')}
               />
               <div className={styles.search_and_list_product}>
                  <div className={styles.search}>
                     <Dropdown
                        menu={{
                           items,
                        }}
                     >
                        <InputComponent
                           placeholder={'Shopee bao ship 0Đ - Đăng ký ngay!'}
                           style={{
                              width: '840px',
                              borderRadius: '2px',
                              padding: '6px 12px',
                           }}
                           className={styles.input_search}
                           onChange={(e) => handleSearch(e)}
                        />
                     </Dropdown>

                     <ButtonIconComponent
                        style={{
                           position: 'absolute',
                           right: '2px',
                           padding: '8px 20px',
                           background: '#fb5533',
                           borderRadius: '2px',
                        }}
                        icon={<SearchOutlined style={{color: '#fff'}} />}
                     />
                  </div>
                  <div className={styles.list_product}>
                     <span>Điện thoại</span>
                     <span>Máy tính</span>
                     <span>Laptop</span>
                     <span>Giày</span>
                     <span>Quần áo</span>
                  </div>
               </div>
               <div className={styles.cart} onClick={() => navigate('/cart')}>
                  <Badge count={cart?.cartItems?.length} size='small' style={{top: '1px'}}>
                     <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff', cursor: 'pointer'}} />
                  </Badge>
               </div>
            </div>
         </div>
      </div>
   );
}
