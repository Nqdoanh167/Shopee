/** @format */

import React, {useEffect, useMemo, useState} from 'react';
import styles from './CheckoutPage.module.scss';
import {LocationIcon} from '../../svg';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {convertPrice} from '../../utils';
import * as OrderService from '../../services/OrderService';
import {removeProductsFromCart} from '../../redux/slides/cartSlide';
import {removeProductsFromOrder} from '../../redux/slides/orderSilde';
import {useNavigate} from 'react-router-dom';
export default function CheckoutPage() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);
   const orderItems = useSelector((state) => state?.order?.orderItems);
   const [costShip, setCostShip] = useState(16500);
   const [load, setLoad] = useState(false);
   const priceMemo = useMemo(() => {
      const result = orderItems?.reduce((total, cur) => {
         return total + cur.price * cur.amount;
      }, 0);
      return result;
   }, [orderItems]);
   useEffect(() => {
      if (priceMemo >= 50000) {
         setCostShip(0);
      }
   }, [priceMemo]);
   const handleChangeAddress = () => {};

   const handleAddOrder = async () => {
      try {
         setLoad(true);
         const res = await OrderService.createOrder(
            {
               fullname: user?.name,
               address: user?.address,
               phone: user?.phone,
               paymentMethod: 'COD',
               costShip: costShip,
               orderProducts: orderItems.map((item) => {
                  return {
                     productId: item?.product_id,
                     amount: item?.amount,
                     price: item?.price,
                  };
               }),
            },
            user?.id,
            user?.access_token,
         );
         if (res?.status === 201) {
            alert('Đặt hàng thành công');
            dispatch(removeProductsFromCart(orderItems.map((item) => item?.product_id)));
            dispatch(removeProductsFromOrder(orderItems.map((item) => item?.product_id)));
            navigate('/');
         }
      } catch (error) {
         alert(error?.response?.data);
      } finally {
         setLoad(false);
      }
   };
   return (
      <div className={styles.checkout}>
         <div className={styles.container}>
            <div className={styles.rim}></div>
            <div className={styles.header}>
               <div className={styles.title}>
                  <LocationIcon style={{fill: '#ee4d2d'}} />
                  <span>Địa chỉ nhận hàng</span>
               </div>
               <div className={styles.info}>
                  <div className={styles.name}>{`${user?.name} ${user?.phone}`}</div>
                  <div className={styles.address}>
                     {user?.address}
                     <span>Mặc định</span>
                  </div>
                  <div className={styles.change} onClick={handleChangeAddress}>
                     Thay đổi
                  </div>
               </div>
            </div>
            <div className={styles.content}>
               <div className={styles.top_content}>
                  <div className={styles.title}>Sản phẩm</div>
                  <div className={styles.title_sp}>
                     <span>Đơn giá</span>
                     <span>Số lượng</span>
                     <span>Thành tiền</span>
                  </div>
               </div>
               {orderItems &&
                  orderItems.map((item, index) => (
                     <div className={styles.list_item} key={index + 1}>
                        <div className={styles.left}>
                           <div className={styles.img}>
                              <img
                                 src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpfn82x904em2d_tn'
                                 alt=''
                                 width={40}
                              />
                           </div>
                           <div className={styles.name}>{item?.name}</div>
                        </div>
                        <div className={styles.right}>
                           <div className={styles.don_gia}>{`${convertPrice(item?.price) || 0}`}</div>
                           <div className={styles.quantity}>{`${item?.amount || 0}`}</div>
                           <div className={styles.thanh_tien}>{`${convertPrice(item?.price * item?.amount) || 0}`}</div>
                        </div>
                     </div>
                  ))}
            </div>
            <div className={styles.bottom}>
               <div className={styles.bottom_top}>
                  <div className={styles.left}>Phương thức thanh toán</div>
                  <div className={styles.right}>
                     <div className={styles.method}>Thanh toán khi nhận hàng</div>
                     <div className={styles.change}>Thay đổi</div>
                  </div>
               </div>
               <div className={styles.bottom_mid}>
                  <div className={styles.left}>
                     <span>Tổng tiền hàng</span>
                     <span>Phí vận chuyển</span>
                     <span style={{position: 'relative', top: '10px'}}>Tổng thanh toán</span>
                  </div>
                  <div className={styles.right}>
                     <span>{convertPrice(priceMemo)}</span>
                     <span>{convertPrice(costShip)}</span>
                     <span style={{fontSize: '28px', color: '#ee4d2d'}}>{convertPrice(costShip + priceMemo)}</span>
                  </div>
               </div>
               <div className={styles.bottom_bottom}>
                  <div className={styles.policy}>
                     Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                     <span style={{color: '#05a', cursor: 'pointer'}}> Điều khoản Shopee</span>
                  </div>
                  <ButtonComponent
                     textButton={'Đặt hàng'}
                     styleTextButton={{
                        color: '#fff',
                        fontSize: '16px',
                     }}
                     styleButton={{
                        width: '180px',
                        height: '42px',
                        backgroundColor: '#ee4d2d',
                     }}
                     onClick={handleAddOrder}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
