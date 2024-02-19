/** @format */

import React, {useMemo, useState} from 'react';
import styles from './CartPage.module.scss';
import {Checkbox} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseAmount, increaseAmount, removeCart} from '../../redux/slides/cartSlide';
import {useNavigate} from 'react-router-dom';
import {addOrder} from '../../redux/slides/orderSilde';
export default function CartPage() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleChangeCount = (type, idProduct) => {
      if (type === 'increase') {
         dispatch(increaseAmount(idProduct));
      } else dispatch(decreaseAmount(idProduct));
   };
   const handleDeleteProductFromCart = (id) => {
      dispatch(removeCart(id));
   };
   const cartItems = useSelector((state) => state?.cart?.cartItems);

   const [listChecked, setListChecked] = useState([]);
   const onChangeCheck = (e) => {
      if (listChecked.includes(e.target.value)) {
         const newListChecked = listChecked.filter((item) => item !== e.target.value);
         setListChecked(newListChecked);
      } else {
         setListChecked([...listChecked, e.target.value]);
      }
   };
   const handleOnchangeCheckAll = (e) => {
      if (e.target.checked) {
         const newListChecked = [];
         cartItems?.forEach((item) => {
            newListChecked.push(item?.product_id);
         });
         setListChecked(newListChecked);
      } else {
         setListChecked([]);
      }
   };
   const checkItems = cartItems.filter((item) => listChecked.includes(item.product_id));

   const priceMemo = useMemo(() => {
      const result = checkItems?.reduce((total, cur) => {
         return total + cur.price * cur.amount;
      }, 0);
      return result;
   }, [checkItems]);
   const handleBuyProduct = () => {
      dispatch(addOrder({orderAdds: checkItems}));
      navigate('/checkout');
   };
   return (
      <div className={styles.cartWrap}>
         <div className={styles.container}>
            <div className={styles.header}>
               <div className={styles.header_left}>
                  <Checkbox
                     className={styles.checkbox}
                     onChange={handleOnchangeCheckAll}
                     checked={listChecked?.length === cartItems?.length}
                  />
                  <span>Sản phẩm</span>
               </div>
               <div className={styles.header_right}>
                  <span>Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Số tiền</span>
                  <span>Thao tác</span>
               </div>
            </div>
            {cartItems &&
               cartItems.map((item, index) => (
                  <div className={styles.list_item} key={index + 1}>
                     <div className={styles.left}>
                        <Checkbox
                           className={styles.checkbox}
                           onChange={onChangeCheck}
                           value={item?.product_id}
                           checked={listChecked.includes(item?.product_id)}
                        />
                        <div className={styles.product}>
                           <img
                              src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp20pwpdluu3cd'
                              alt=''
                              width={80}
                           />
                           <div className={styles.name}>{item?.name}</div>
                        </div>
                     </div>
                     <div className={styles.right}>
                        <div className={styles.price}>{`₫${item?.price}`}</div>
                        <div className={styles.quanity}>
                           <button
                              className={styles.btn_decrease}
                              onClick={() => handleChangeCount('decrease', item?.product_id)}
                              disabled={item?.amount === 1}
                           >
                              -
                           </button>
                           <span className={styles.value}>{item?.amount}</span>
                           <button
                              className={styles.btn_increase}
                              onClick={() => handleChangeCount('increase', item?.product_id)}
                              disabled={item?.amount >= item?.countInstock}
                           >
                              +
                           </button>
                        </div>
                        <div className={styles.totalPrice}>{`₫${item?.price * item?.amount || 0}`}</div>
                        <DeleteOutlined
                           style={{cursor: 'pointer'}}
                           onClick={() => handleDeleteProductFromCart(item?.product_id)}
                        />
                     </div>
                  </div>
               ))}
            <div className={styles.bottom}>
               <span>Tổng thanh toán</span>
               <span className={styles.price}>{`₫${priceMemo}`}</span>
               <ButtonComponent
                  textButton={'Mua hàng'}
                  styleTextButton={{
                     color: '#fff',
                  }}
                  styleButton={{
                     width: '180px',
                     height: '42px',
                     backgroundColor: '#ee4d2d',
                  }}
                  disabled={priceMemo === 0}
                  onClick={handleBuyProduct}
               />
            </div>
         </div>
      </div>
   );
}
